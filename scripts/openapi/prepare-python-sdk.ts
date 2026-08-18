#!/usr/bin/env tsx
/**
 * prepare-python-sdk.ts
 *
 * Runs after `generate-sdk:python` (which wipes and rewrites
 * `sdks/python/` from the spec). The Python analogue of
 * `prepare-node-sdk.ts`: replace the openapi-generator-emitted
 * `pyproject.toml` with the hand-curated
 * `templates/python/pyproject.toml` so the SDK is a
 * standalone, installable package with stable metadata and deps
 * (rather than the generator's poetry-flavoured defaults).
 *
 * The curated source lives under `templates/python/` —
 * outside the wiped output tree — so it survives every regeneration.
 *
 * Usage: `tsx scripts/openapi/prepare-python-sdk.ts`
 */

import fs from "node:fs";
import path from "node:path";
import { readSpecVersion } from "./spec-version";

const REPO_ROOT = process.cwd();
const SDK_DIR = path.join(REPO_ROOT, "sdks", "python");
const PYPROJECT_SRC = path.join(
	REPO_ROOT,
	"templates",
	"python",
	"pyproject.toml",
);
const PYPROJECT_DEST = path.join(SDK_DIR, "pyproject.toml");

function rel(p: string): string {
	return path.relative(REPO_ROOT, p);
}

function fail(msg: string): never {
	console.error(`prepare-python-sdk: ${msg}`);
	process.exit(1);
}

function main(): void {
	if (!fs.existsSync(SDK_DIR)) {
		fail(`SDK dir not found: ${rel(SDK_DIR)}. Run \`npm run generate-sdk:python\` first.`);
	}
	if (!fs.existsSync(PYPROJECT_SRC)) {
		fail(`Curated pyproject.toml not found: ${rel(PYPROJECT_SRC)}`);
	}
	// Stamp the pinned spec version onto the `[project] version` field so the
	// published package tracks spec-version.json rather than a stale literal.
	const version = readSpecVersion();
	const src = fs.readFileSync(PYPROJECT_SRC, "utf8");
	const stamped = stampVersion(src, version);
	fs.writeFileSync(PYPROJECT_DEST, stamped, "utf8");
	console.log(
		`Wrote SDK pyproject.toml (version ${version}): ${rel(PYPROJECT_SRC)} -> ${rel(PYPROJECT_DEST)}`,
	);
}

/** Replace the first top-level `version = "..."` assignment (the [project] one). */
function stampVersion(toml: string, version: string): string {
	let replaced = false;
	const out = toml.replace(/^version\s*=\s*".*"\s*$/m, () => {
		replaced = true;
		return `version = "${version}"`;
	});
	if (!replaced) {
		fail("could not find a `version = \"...\"` line in pyproject.toml to stamp");
	}
	return out;
}

main();
