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

function download(url: string): Promise<Buffer> {
	return new Promise((resolve, reject) => {
		https
			.get(url, { headers: { "User-Agent": "unit-sdks-fetch-spec" } }, (res) => {
				if (
					res.statusCode &&
					res.statusCode >= 300 &&
					res.statusCode < 400 &&
					res.headers.location
				) {
					res.resume();
					resolve(download(new URL(res.headers.location, url).toString()));
					return;
				}
				if (res.statusCode !== 200) {
					res.resume();
					reject(new Error(`GET ${url} -> HTTP ${res.statusCode}`));
					return;
				}
				const chunks: Buffer[] = [];
				res.on("data", (c) => chunks.push(c));
				res.on("end", () => resolve(Buffer.concat(chunks)));
			})
			.on("error", reject);
	});
}

function writeOut(buf: Buffer, source: string): void {
	const text = buf.toString("utf8");
	try {
		JSON.parse(text);
	} catch (err) {
		console.error(`[fetch-spec] ${source} is not valid JSON: ${String(err)}`);
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
	writeOut(await download(url), url);
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

	const lock = readLock();
	const url = `https://github.com/${lock.repo}/releases/download/v${lock.version}/${lock.assetName}`;
	await fromUrl(url);
}

main().catch((err) => {
	console.error(`[fetch-spec] ${err instanceof Error ? err.message : String(err)}`);
	process.exit(1);
});
