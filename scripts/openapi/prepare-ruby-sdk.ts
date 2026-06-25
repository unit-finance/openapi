#!/usr/bin/env tsx
/**
 * prepare-ruby-sdk.ts
 *
 * Runs after `generate-sdk:ruby` (which wipes and rewrites
 * `sdks/ruby/` from the spec). The Ruby analogue of
 * `prepare-python-sdk.ts`: replace the openapi-generator-emitted
 * `unit_finance_sdk.gemspec` with the hand-curated
 * `templates/ruby/unit_finance_sdk.gemspec` so the gem ships
 * stable, branded metadata and deps (rather than the generator's
 * OpenAPI-Generator/Unlicense defaults). The curated gemspec keeps the
 * `typhoeus` runtime dependency and the `rspec` development dependency.
 *
 * The curated source lives under `templates/ruby/` — outside the
 * wiped output tree — so it survives every regeneration. The swap is
 * deterministic, so the committed gemspec matches regeneration (no CI drift).
 *
 * Usage: `tsx scripts/openapi/prepare-ruby-sdk.ts`
 */

import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const SDK_DIR = path.join(REPO_ROOT, "sdks", "ruby");
const GEMSPEC_NAME = "unit_finance_sdk.gemspec";
const GEMSPEC_SRC = path.join(
	REPO_ROOT,
	"templates",
	"ruby",
	GEMSPEC_NAME,
);
const GEMSPEC_DEST = path.join(SDK_DIR, GEMSPEC_NAME);

function rel(p: string): string {
	return path.relative(REPO_ROOT, p);
}

function fail(msg: string): never {
	console.error(`prepare-ruby-sdk: ${msg}`);
	process.exit(1);
}

function main(): void {
	if (!fs.existsSync(SDK_DIR)) {
		fail(`SDK dir not found: ${rel(SDK_DIR)}. Run \`npm run generate-sdk:ruby\` first.`);
	}
	if (!fs.existsSync(GEMSPEC_SRC)) {
		fail(`Curated gemspec not found: ${rel(GEMSPEC_SRC)}`);
	}
	fs.copyFileSync(GEMSPEC_SRC, GEMSPEC_DEST);
	console.log(
		`Replaced SDK gemspec: ${rel(GEMSPEC_SRC)} -> ${rel(GEMSPEC_DEST)}`,
	);
}

main();
