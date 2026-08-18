#!/usr/bin/env tsx
/**
 * set-spec-version.ts
 *
 * Updates the `version` field of `spec-version.json` — the single knob that
 * both `fetch-spec` (which release asset to download) and the `prepare-*-sdk`
 * steps (what version to stamp onto every SDK) read from.
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
	lock.version = version;
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
