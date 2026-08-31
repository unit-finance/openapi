#!/usr/bin/env tsx
/**
 * fetch-spec.ts
 *
 * Materializes `spec/openapi.bundled.json` — the single-document spec that
 * `openapi-generator-cli` consumes — from the upstream `unit-openapi` repo.
 *
 * Resolution order:
 *   1. $SPEC_BUNDLE_PATH  — explicit local file (used in CI when the spec repo
 *      is checked out alongside, or for offline/local dev). May be set in a
 *      root `.env` (real environment variables take precedence). Defaults to
 *      `spec/openapi.bundled.json`; when that default file is absent, resolution
 *      falls through to the options below instead of erroring.
 *   2. $SPEC_BUNDLE_URL   — explicit URL override.
 *   3. The GitHub release asset for the version pinned in `spec-version.json`
 *      (`https://github.com/<repo>/releases/download/v<version>/<assetName>`).
 *
 * Options 1 and 2 bypass the pin, so the pinned `version` is synced back from
 * the materialized spec's `info.version`; option 3 instead validates that the
 * two already agree.
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

/**
 * Load KEY=VALUE pairs from a root `.env` into `process.env`, without clobbering
 * variables already set in the real environment (which always win). Keeps the
 * SPEC_BUNDLE_* overrides configurable for local dev without exporting them in
 * the shell. Missing file is a no-op.
 */
function loadDotEnv(): void {
	const envPath = path.join(REPO_ROOT, ".env");
	if (!fs.existsSync(envPath)) return;
	for (const raw of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
		const line = raw.trim();
		if (!line || line.startsWith("#")) continue;
		const eq = line.indexOf("=");
		if (eq === -1) continue;
		const key = line.slice(0, eq).trim();
		if (!key || key in process.env) continue;
		let value = line.slice(eq + 1).trim();
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		process.env[key] = value;
	}
}

interface SpecLock {
	repo: string;
	version: string;
	assetName: string;
	/** API slices (tags) present in the spec; maintained by `updateLockSlices`. */
	slices?: string[];
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

interface OpenApiOperation {
	tags?: string[];
	operationId?: string;
	requestBody?: unknown;
}

interface OpenApiDoc {
	info?: { version?: string };
	tags?: Array<{ name?: string }>;
	paths?: Record<string, Record<string, OpenApiOperation>>;
}

/**
 * HTTP methods that carry a request body. Unit's gateway requires the
 * `application/vnd.api+json` Content-Type on these even when the body is empty
 * (e.g. action endpoints like cancel/enable/disable), and returns 415 without
 * it. openapi-generator's typescript-axios template only emits a Content-Type
 * header when the operation declares a `requestBody`, so bodyless mutating
 * operations produce clients that omit it.
 */
const BODY_METHODS = new Set(["post", "put", "patch", "delete"]);

/**
 * Give every mutating operation that lacks a `requestBody` an optional,
 * empty JSON:API request body. This is a no-op for operations that already
 * declare one, so it's safe to re-run against an already-patched bundle. The
 * added body is optional, so generated method signatures stay backward
 * compatible (callers gain an optional argument, nothing becomes required),
 * but the generator now emits the Content-Type header these endpoints need.
 */
function injectBodylessRequestBodies(doc: OpenApiDoc): string[] {
	const patched: string[] = [];
	for (const [route, ops] of Object.entries(doc.paths ?? {})) {
		for (const [method, op] of Object.entries(ops)) {
			if (!BODY_METHODS.has(method)) continue;
			if (!op || typeof op !== "object" || op.requestBody) continue;
			op.requestBody = {
				required: false,
				content: {
					"application/vnd.api+json": {
						schema: { type: "object" },
					},
				},
			};
			patched.push(`${method.toUpperCase()} ${route} (${op.operationId ?? "?"})`);
		}
	}
	return patched;
}

/**
 * The set of API "slices" the spec exposes — the tags that group its
 * operations (e.g. Applications, Accounts, Fees). Derived from the operation
 * tags, unioned with any declared top-level `tags`, and sorted for a stable,
 * diff-friendly ordering.
 */
function extractSlices(doc: OpenApiDoc): string[] {
	const slices = new Set<string>();
	for (const ops of Object.values(doc.paths ?? {})) {
		for (const op of Object.values(ops)) {
			if (op && typeof op === "object" && Array.isArray(op.tags)) {
				for (const tag of op.tags) slices.add(String(tag));
			}
		}
	}
	for (const tag of doc.tags ?? []) {
		if (tag?.name) slices.add(String(tag.name));
	}
	return [...slices].sort();
}

/**
 * Persist the materialized spec's slices — and, when the spec was not resolved
 * from the pinned release, its `info.version` — back into spec-version.json,
 * preserving the file's other fields, ordering, and formatting.
 *
 * The release path already validated the pin against `info.version`, so there
 * is nothing to sync there. The local-file and URL paths bypass that pin
 * entirely, and the version recorded here is what every `prepare-*-sdk` step
 * stamps onto the generated packages: without this the SDKs get published under
 * whatever version the pin happened to be left at.
 */
function updateLock(doc: OpenApiDoc, syncVersion: boolean): void {
	const slices = extractSlices(doc);
	const lock = JSON.parse(fs.readFileSync(LOCK_PATH, "utf8")) as Record<
		string,
		unknown
	>;
	lock.slices = slices;

	const specVersion = doc.info?.version?.replace(/^v/, "");
	let versionNote = "";
	if (syncVersion && specVersion && specVersion !== lock.version) {
		if (!/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)*$/.test(specVersion)) {
			console.error(
				`[fetch-spec] Spec info.version "${specVersion}" is not a valid semver ` +
					"version, so it cannot be recorded in spec-version.json.",
			);
			process.exit(1);
		}
		versionNote = `, version ${String(lock.version)} -> ${specVersion}`;
		lock.version = specVersion;
	}

	fs.writeFileSync(LOCK_PATH, `${JSON.stringify(lock, null, 2)}\n`, "utf8");
	console.log(
		`[fetch-spec] Recorded slices in ${path.relative(REPO_ROOT, LOCK_PATH)}: ` +
			`${slices.join(", ") || "(none)"}${versionNote}`,
	);
}

function writeOut(buf: Buffer, source: string, expectedVersion?: string): void {
	const text = buf.toString("utf8");
	let doc: OpenApiDoc;
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
	const patched = injectBodylessRequestBodies(doc);
	const out = patched.length ? `${JSON.stringify(doc, null, 2)}\n` : text.endsWith("\n") ? text : `${text}\n`;
	fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
	fs.writeFileSync(OUT_PATH, out, "utf8");
	console.log(
		`[fetch-spec] Wrote ${path.relative(REPO_ROOT, OUT_PATH)} from ${source}`,
	);
	if (patched.length) {
		console.log(
			`[fetch-spec] Added optional JSON:API request body to ${patched.length} ` +
				`bodyless mutating operation(s): ${patched.join(", ")}`,
		);
	}
	updateLock(doc, expectedVersion === undefined);
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
			const lines = [
				`GET ${url} -> HTTP ${res.statusCode}`,
				"",
				`The release asset could not be downloaded anonymously (${lock.repo} is`,
				"likely private, and no token was provided).",
				"",
				"To run locally, pick one of:",
				"",
				`  1. Set SPEC_REPO_TOKEN (a token with Contents: read on ${lock.repo}),`,
				"     then re-run.",
				"",
				"  2. Point SPEC_BUNDLE_PATH (local file) or SPEC_BUNDLE_URL at a spec",
				"     directly.",
			];
			throw new Error(lines.join("\n"));
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
	loadDotEnv();

	// SPEC_BUNDLE_PATH defaults to the committed spec bundle. An explicitly
	// configured path that is missing is a hard error; the default silently
	// falls through to the URL/release options when the file isn't present yet.
	const explicitPath = process.env.SPEC_BUNDLE_PATH;
	const bundlePath = explicitPath ?? OUT_PATH;
	if (fs.existsSync(bundlePath)) {
		writeOut(fs.readFileSync(bundlePath), bundlePath);
		return;
	}
	if (explicitPath) {
		console.error(`[fetch-spec] SPEC_BUNDLE_PATH not found: ${explicitPath}`);
		process.exit(1);
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
