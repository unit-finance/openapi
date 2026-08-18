#!/usr/bin/env tsx
/**
 * fetch-spec.ts
 *
 * Materializes `spec/openapi.bundled.json` — the single-document spec that
 * `openapi-generator-cli` consumes — from the upstream `unit-openapi` repo.
 *
 * Resolution order:
 *   1. $SPEC_BUNDLE_PATH  — explicit local file (used in CI when the spec repo
 *      is checked out alongside, or for offline/local dev).
 *   2. $SPEC_BUNDLE_URL   — explicit URL override.
 *   3. The GitHub release asset for the version pinned in `spec-version.json`
 *      (`https://github.com/<repo>/releases/download/v<version>/<assetName>`).
 *
 * The downloaded/copied file is git-ignored: it is a derived artifact, fully
 * reproducible from `spec-version.json`. Bumping `spec-version.json` and
 * re-running `npm run generate-sdks` is how the SDKs track a new spec release.
 */
import fs from "node:fs";
import https from "node:https";
import path from "node:path";

const REPO_ROOT = process.cwd();
const LOCK_PATH = path.join(REPO_ROOT, "spec-version.json");
const OUT_PATH = path.join(REPO_ROOT, "spec", "openapi.bundled.json");

interface SpecLock {
	repo: string;
	version: string;
	assetName: string;
}

function readLock(): SpecLock {
	if (!fs.existsSync(LOCK_PATH)) {
		console.error(`[fetch-spec] Missing ${path.relative(REPO_ROOT, LOCK_PATH)}`);
		process.exit(1);
	}
	const lock = JSON.parse(fs.readFileSync(LOCK_PATH, "utf8")) as SpecLock;
	if (!lock.repo || !lock.version || !lock.assetName) {
		console.error("[fetch-spec] spec-version.json must set repo, version, assetName");
		process.exit(1);
	}
	return lock;
}

type Headers = Record<string, string>;

const BASE_HEADERS: Headers = { "User-Agent": "unit-sdks-fetch-spec" };

interface HttpResponse {
	statusCode: number;
	body: Buffer;
}

/**
 * Token used to read the (possibly private) spec repo's releases. The default
 * Actions `GITHUB_TOKEN` only grants access to the *current* repo, so a private
 * `unit-openapi` needs a separate token (PAT/App) with Contents: read, supplied
 * as `SPEC_REPO_TOKEN`.
 */
function specRepoToken(): string | undefined {
	return process.env.SPEC_REPO_TOKEN || process.env.GH_TOKEN || undefined;
}

function httpGet(url: string, headers: Headers = {}): Promise<HttpResponse> {
	return new Promise((resolve, reject) => {
		https
			.get(url, { headers: { ...BASE_HEADERS, ...headers } }, (res) => {
				if (
					res.statusCode &&
					res.statusCode >= 300 &&
					res.statusCode < 400 &&
					res.headers.location
				) {
					res.resume();
					// Drop Authorization when following a redirect: release-asset
					// downloads redirect to a signed object-store URL that rejects a
					// forwarded GitHub token (and we must not leak it to third parties).
					const next: Headers = { ...headers };
					delete next.Authorization;
					resolve(httpGet(new URL(res.headers.location, url).toString(), next));
					return;
				}
				const chunks: Buffer[] = [];
				res.on("data", (c) => chunks.push(c));
				res.on("end", () =>
					resolve({ statusCode: res.statusCode ?? 0, body: Buffer.concat(chunks) }),
				);
			})
			.on("error", reject);
	});
}

function writeOut(buf: Buffer, source: string, expectedVersion?: string): void {
	const text = buf.toString("utf8");
	let doc: { info?: { version?: string } };
	try {
		doc = JSON.parse(text);
	} catch (err) {
		console.error(`[fetch-spec] ${source} is not valid JSON: ${String(err)}`);
		process.exit(1);
	}
	// Guard against a dishonest pin: the version we generate (and publish) SDKs
	// under comes from spec-version.json, so the fetched document's own
	// info.version must agree with it. A mismatch means the pinned release asset
	// was rebuilt from a different spec, or the pin was bumped without a matching
	// release — either way the SDKs would be stamped with the wrong version.
	const actual = doc.info?.version;
	if (expectedVersion && actual && actual !== expectedVersion) {
		console.error(
			`[fetch-spec] Spec info.version (${actual}) does not match ` +
				`spec-version.json (${expectedVersion}). Fix the pin or the release asset.`,
		);
		process.exit(1);
	}
	fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
	fs.writeFileSync(OUT_PATH, text.endsWith("\n") ? text : `${text}\n`, "utf8");
	console.log(
		`[fetch-spec] Wrote ${path.relative(REPO_ROOT, OUT_PATH)} from ${source}`,
	);
}

async function fromUrl(url: string): Promise<void> {
	console.log(`[fetch-spec] Downloading spec from ${url}`);
	const token = specRepoToken();
	const headers: Headers = token ? { Authorization: `Bearer ${token}` } : {};
	const res = await httpGet(url, headers);
	if (res.statusCode !== 200) {
		throw new Error(`GET ${url} -> HTTP ${res.statusCode}`);
	}
	writeOut(res.body, url);
}

/**
 * Fetch the pinned release asset. For a public repo the anonymous browser
 * download URL is enough; for a private repo that URL 404s, so we resolve the
 * asset via the authenticated API and download it through its asset endpoint.
 */
async function fromRelease(lock: SpecLock): Promise<void> {
	const tag = `v${lock.version}`;
	const token = specRepoToken();

	if (!token) {
		const url = `https://github.com/${lock.repo}/releases/download/${tag}/${lock.assetName}`;
		console.log(`[fetch-spec] Downloading spec from ${url}`);
		const res = await httpGet(url);
		if (res.statusCode !== 200) {
			throw new Error(`GET ${url} -> HTTP ${res.statusCode}`);
		}
		writeOut(res.body, url, lock.version);
		return;
	}

	const apiBase = process.env.GITHUB_API_URL || "https://api.github.com";
	const relUrl = `${apiBase}/repos/${lock.repo}/releases/tags/${tag}`;
	const relRes = await httpGet(relUrl, {
		Authorization: `Bearer ${token}`,
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28",
	});
	if (relRes.statusCode !== 200) {
		throw new Error(
			`Could not read release ${tag} of ${lock.repo} (HTTP ${relRes.statusCode}). ` +
				"Verify the release exists and SPEC_REPO_TOKEN has Contents: read on that repo.",
		);
	}

	const release = JSON.parse(relRes.body.toString("utf8")) as {
		assets?: Array<{ name: string; url: string }>;
	};
	const asset = (release.assets ?? []).find((a) => a.name === lock.assetName);
	if (!asset) {
		throw new Error(
			`Release ${tag} of ${lock.repo} has no asset named "${lock.assetName}".`,
		);
	}

	console.log(
		`[fetch-spec] Downloading ${lock.assetName} from ${lock.repo}@${tag} (private API)`,
	);
	const dl = await httpGet(asset.url, {
		Authorization: `Bearer ${token}`,
		Accept: "application/octet-stream",
	});
	if (dl.statusCode !== 200) {
		throw new Error(`GET ${asset.url} -> HTTP ${dl.statusCode}`);
	}
	writeOut(dl.body, `${lock.repo}@${tag}:${lock.assetName}`, lock.version);
}

async function main(): Promise<void> {
	const overridePath = process.env.SPEC_BUNDLE_PATH;
	if (overridePath) {
		if (!fs.existsSync(overridePath)) {
			console.error(`[fetch-spec] SPEC_BUNDLE_PATH not found: ${overridePath}`);
			process.exit(1);
		}
		writeOut(fs.readFileSync(overridePath), overridePath);
		return;
	}

	const overrideUrl = process.env.SPEC_BUNDLE_URL;
	if (overrideUrl) {
		await fromUrl(overrideUrl);
		return;
	}

	await fromRelease(readLock());
}

main().catch((err) => {
	console.error(`[fetch-spec] ${err instanceof Error ? err.message : String(err)}`);
	process.exit(1);
});
