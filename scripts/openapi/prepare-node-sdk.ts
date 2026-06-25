#!/usr/bin/env tsx
/**
 * prepare-node-sdk.ts
 *
 * Two responsibilities, both run after `generate-sdk:node` (which wipes
 * and rewrites `sdks/node/` from the spec):
 *
 *   1. Replace the openapi-generator-emitted `package.json` with the
 *      hand-curated `templates/node/package.json` so the SDK
 *      is a standalone, installable Node package with stable metadata,
 *      deps, and scripts (rather than the generator's defaults).
 *
 *   2. Patch the generator-emitted `tsconfig.json` and
 *      `tsconfig.esm.json` to exclude the placed `tests/` directory.
 *      Without this, the SDK's `prepare` script (which runs `tsc` over
 *      the whole SDK tree) would try to compile the test files and
 *      fail because they reference `jest`/`expect`/etc. that aren't in
 *      the SDK's own dep tree.
 *
 * The curated source lives under `templates/node/` —
 * outside the wiped output tree — so it survives every regeneration.
 *
 * Usage: `tsx scripts/openapi/prepare-node-sdk.ts`
 */

import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const SDK_DIR = path.join(REPO_ROOT, "sdks", "node");
const PKG_SRC = path.join(
	REPO_ROOT,
	"templates",
	"node",
	"package.json",
);
const PKG_DEST = path.join(SDK_DIR, "package.json");

const TSCONFIGS = ["tsconfig.json", "tsconfig.esm.json"];
const TESTS_EXCLUDES = ["tests", "tests/**/*"];

function rel(p: string): string {
	return path.relative(REPO_ROOT, p);
}

function ensureExists(p: string, what: string): void {
	if (!fs.existsSync(p)) {
		console.error(`${what} not found: ${rel(p)}`);
		process.exit(1);
	}
}

function replacePackageJson(): void {
	ensureExists(PKG_SRC, "Curated package.json");
	ensureExists(SDK_DIR, "SDK dir");
	fs.copyFileSync(PKG_SRC, PKG_DEST);
	console.log(`Replaced SDK package.json: ${rel(PKG_SRC)} -> ${rel(PKG_DEST)}`);
}

function patchTsconfig(file: string): void {
	const full = path.join(SDK_DIR, file);
	if (!fs.existsSync(full)) {
		console.warn(`Skipping ${rel(full)}: file not present.`);
		return;
	}
	const cfg = JSON.parse(fs.readFileSync(full, "utf8"));
	const exclude: string[] = Array.isArray(cfg.exclude) ? cfg.exclude : [];
	let changed = false;
	for (const entry of TESTS_EXCLUDES) {
		if (!exclude.includes(entry)) {
			exclude.push(entry);
			changed = true;
		}
	}
	if (changed) {
		cfg.exclude = exclude;
		fs.writeFileSync(full, `${JSON.stringify(cfg, null, 2)}\n`, "utf8");
		console.log(`Patched ${rel(full)}: exclude += ${TESTS_EXCLUDES.join(", ")}`);
	}
}

function main(): void {
	replacePackageJson();
	for (const tsc of TSCONFIGS) {
		patchTsconfig(tsc);
	}
}

main();
