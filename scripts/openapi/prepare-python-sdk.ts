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
 * (rather than the generator's poetry-flavoured defaults). Also
 * trims the generator README so PyPI does not ship the huge
 * API-endpoint and model index tables, and patches the generated
 * `api_client.py` so request datetimes go out in the one spelling the
 * Unit API parses (`YYYY-MM-DDTHH:MM:SS.sssZ`).
 *
 * The curated source lives under `templates/python/` —
 * outside the wiped output tree — so it survives every regeneration.
 *
 * Usage: `tsx scripts/openapi/prepare-python-sdk.ts`
 */

import fs from "node:fs";
import path from "node:path";
import { readPackageVersion } from "./spec-version";

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
	const version = readPackageVersion("python");
	const src = fs.readFileSync(PYPROJECT_SRC, "utf8");
	const stamped = stampVersion(src, version);
	fs.writeFileSync(PYPROJECT_DEST, stamped, "utf8");
	console.log(
		`Wrote SDK pyproject.toml (version ${version}): ${rel(PYPROJECT_SRC)} -> ${rel(PYPROJECT_DEST)}`,
	);

	const readmePath = path.join(SDK_DIR, "README.md");
	if (!fs.existsSync(readmePath)) {
		fail(`SDK README.md not found: ${rel(readmePath)}`);
	}
	const polished = polishReadme(fs.readFileSync(readmePath, "utf8"));
	fs.writeFileSync(readmePath, polished, "utf8");
	console.log(`Wrote SDK README.md (PyPI description, without generator indexes): ${rel(readmePath)}`);

	const apiClientPath = path.join(SDK_DIR, "unit_finance_sdk", "api_client.py");
	if (!fs.existsSync(apiClientPath)) {
		fail(`SDK api_client.py not found: ${rel(apiClientPath)}`);
	}
	fs.writeFileSync(
		apiClientPath,
		patchDatetimeSerialization(fs.readFileSync(apiClientPath, "utf8")),
		"utf8",
	);
	console.log(`Patched ${rel(apiClientPath)}: datetimes serialize as YYYY-MM-DDTHH:MM:SS.sssZ`);
}

const DATETIME_BRANCH =
	"        elif isinstance(obj, (datetime.datetime, datetime.date)):\n" +
	"            return obj.isoformat()\n";

/**
 * The generated client writes datetimes with `isoformat()`, which yields
 * microseconds and a `+00:00` offset (e.g. `2026-09-28T21:30:21.348000+00:00`).
 * The Unit API (credit decisions, among others) only accepts millisecond
 * precision with a literal `Z` and answers 400 otherwise, so aware datetimes
 * are normalised to UTC and truncated to milliseconds. Naive datetimes and
 * plain dates keep the generator's behaviour.
 */
function patchDatetimeSerialization(source: string): string {
	if (!source.includes(DATETIME_BRANCH)) {
		fail("could not find the datetime branch of sanitize_for_serialization in api_client.py");
	}
	const patched =
		"        elif isinstance(obj, datetime.datetime) and obj.tzinfo is not None:\n" +
		"            utc = obj.astimezone(datetime.timezone.utc)\n" +
		'            return utc.strftime("%Y-%m-%dT%H:%M:%S.") + f"{utc.microsecond // 1000:03d}Z"\n' +
		DATETIME_BRANCH;
	return source.replace(DATETIME_BRANCH, patched);
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

/**
 * PyPI uses this README as the long description. Drop the generator's
 * endpoint/model indexes, authorization stub, and empty Author section
 * (they dwarf the rest of the page and the relative `docs/` links 404
 * on PyPI) and replace the OpenAPI-generator preamble with a short
 * package blurb.
 */
function polishReadme(readme: string): string {
	const cutCandidates = [
		/^## Documentation for API Endpoints\s*$/m,
		/^## Documentation For Authorization\s*$/m,
		/^## Author\s*$/m,
	];
	let cut = -1;
	for (const re of cutCandidates) {
		const i = readme.search(re);
		if (i !== -1 && (cut === -1 || i < cut)) cut = i;
	}
	if (cut === -1) {
		cut = readme.length;
	}
	const kept = readme.slice(0, cut).replace(/\s+$/, "\n\n");
	const requirements = kept.search(/^## Requirements/m);
	if (requirements === -1) {
		fail("could not find `## Requirements` in README.md");
	}
	return (
		"# Unit Python SDK\n\nPython SDK for the Unit banking API.\n\n" +
		kept.slice(requirements)
	);
}

main();
