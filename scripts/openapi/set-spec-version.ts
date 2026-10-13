#!/usr/bin/env tsx
/**
 * set-spec-version.ts
 *
 * Updates the `version` field of `spec-version.json` — the knob `fetch-spec`
 * reads to pick which release asset to download — and raises
 * `globalSdkVersion` (the shared GitHub Release) when the new spec is newer.
 * Per-language `sdkVersions` are left untouched; they are bumped by hand.
 *
 * Used by the regeneration workflow instead of an inline `node -e` so the bump
 * is validated (semver, normalized `v` prefix) and preserves the file's other
 * fields, ordering, and formatting. Idempotent: writing the current version is
 * a no-op.
 *
 * Usage:
 *   tsx scripts/openapi/set-spec-version.ts <version>
 *   SPEC_VERSION=<version> tsx scripts/openapi/set-spec-version.ts
 *
 * The leading `v` (as used in release tags, e.g. `v0.3.0`) is accepted and
 * stripped; the stored value is a bare semver string.
 */
import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const LOCK_PATH = path.join(REPO_ROOT, "spec-version.json");

function fail(msg: string): never {
	console.error(`[set-spec-version] ${msg}`);
	process.exit(1);
}

/**
 * Compare two bare semver strings by their numeric release cores
 * (major.minor.patch), ignoring any pre-release/build metadata. Returns a
 * negative number when `a < b`, zero when they share a core, positive when
 * `a > b`. Good enough to reject accidental version *downgrades* of the pinned
 * spec; we deliberately don't try to order pre-releases against their release.
 */
function compareCore(a: string, b: string): number {
	const core = (v: string) =>
		v
			.replace(/^v/, "")
			.split(/[-+]/, 1)[0]
			.split(".")
			.map((n) => Number.parseInt(n, 10) || 0);
	const [aMajor, aMinor, aPatch] = core(a);
	const [bMajor, bMinor, bPatch] = core(b);
	return aMajor - bMajor || aMinor - bMinor || aPatch - bPatch;
}

function main(): void {
	const raw = (process.argv[2] ?? process.env.SPEC_VERSION ?? "").trim();
	if (!raw) {
		fail("no version supplied (pass as an argument or set $SPEC_VERSION)");
	}

	const version = raw.replace(/^v/, "");
	// Accept standard semver, including optional pre-release/build metadata.
	if (!/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)*$/.test(version)) {
		fail(`"${raw}" is not a valid semver version`);
	}

	if (!fs.existsSync(LOCK_PATH)) {
		fail(`spec-version.json not found at ${path.relative(REPO_ROOT, LOCK_PATH)}`);
	}

	const lock = JSON.parse(fs.readFileSync(LOCK_PATH, "utf8")) as Record<
		string,
		unknown
	>;
	const previous = lock.version;
	// Guard against regenerating from an older spec than the one the committed
	// SDKs are already built from: that would silently roll the published
	// surface backwards. Same-core versions (incl. re-pinning the current
	// version or moving between its pre-releases) are allowed.
	if (typeof previous === "string" && compareCore(version, previous) < 0) {
		fail(
			`refusing to downgrade spec version: requested ${version} is lower than ` +
				`the currently implemented ${previous}.`,
		);
	}
	lock.version = version;
	const previousGlobal =
		typeof lock.globalSdkVersion === "string" ? lock.globalSdkVersion : previous;
	if (typeof previousGlobal !== "string" || compareCore(version, previousGlobal) > 0) {
		lock.globalSdkVersion = version;
	}
	fs.writeFileSync(LOCK_PATH, `${JSON.stringify(lock, null, 2)}\n`, "utf8");

	if (previous === version) {
		console.log(`[set-spec-version] spec-version.json already at ${version}`);
	} else {
		console.log(
			`[set-spec-version] spec-version.json: ${String(previous)} -> ${version}`,
		);
	}
}

main();
