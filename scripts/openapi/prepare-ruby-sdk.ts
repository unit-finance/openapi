#!/usr/bin/env tsx
/**
 * prepare-ruby-sdk.ts
 *
 * Runs after `generate-sdk:ruby` (which wipes and rewrites
 * `sdks/ruby/` from the spec). The Ruby analogue of
 * `prepare-python-sdk.ts`: replace the openapi-generator-emitted
 * `unit_openapi_ruby_sdk.gemspec` with the hand-curated
 * `templates/ruby/unit_openapi_ruby_sdk.gemspec` so the gem ships
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
import { readPackageVersion } from "./spec-version";

const REPO_ROOT = process.cwd();
const SDK_DIR = path.join(REPO_ROOT, "sdks", "ruby");
const VERSION_RB = path.join(SDK_DIR, "lib", "unit_openapi_ruby_sdk", "version.rb");
const GEMSPEC_NAME = "unit_openapi_ruby_sdk.gemspec";
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
	stampVersion();
	polishReadme();
}

/**
 * Drop everything from the generator's `## Documentation for API Endpoints`
 * section onward (endpoint/model indexes, authorization stub): they dwarf the
 * page and the relative `docs/` links 404 outside the repo.
 */
function polishReadme(): void {
	const readmePath = path.join(SDK_DIR, "README.md");
	if (!fs.existsSync(readmePath)) {
		fail(`SDK README.md not found: ${rel(readmePath)}`);
	}
	const readme = fs.readFileSync(readmePath, "utf8");
	const cut = readme.search(/^## Documentation for API Endpoints\s*$/m);
	const trimmed = cut === -1 ? readme : readme.slice(0, cut).replace(/\s+$/, "\n");
	fs.writeFileSync(readmePath, stampReadmeVersion(trimmed), "utf8");
	console.log(`Wrote SDK README.md (without generator indexes): ${rel(readmePath)}`);
}

/**
 * The generator bakes the config's `gemVersion` into the install
 * instructions; rewrite each mention to the pinned spec version.
 */
function stampReadmeVersion(readme: string): string {
	const version = readPackageVersion("ruby");
	const patterns: RegExp[] = [
		/^(- Package version: )\S+$/m,
		/(unit_openapi_ruby_sdk-)[^\s/]+?(?=\.gem\b)/g,
		/('unit_openapi_ruby_sdk', '~> )[^']+(?=')/g,
	];
	let out = readme;
	for (const re of patterns) {
		if (!re.test(out)) {
			fail(`could not find a version to stamp in the SDK README (${re}); the generator output may have changed.`);
		}
		re.lastIndex = 0;
		out = out.replace(re, `$1${version}`);
	}
	return out;
}

/**
 * The curated gemspec pulls its version from `UnitFinanceSdk::VERSION`
 * (lib/unit_openapi_ruby_sdk/version.rb), which the generator emits from the
 * config's `gemVersion`. Rewrite that constant to the pinned spec version so
 * the built gem tracks spec-version.json.
 */
function stampVersion(): void {
	if (!fs.existsSync(VERSION_RB)) {
		fail(`version.rb not found: ${rel(VERSION_RB)}. Run \`npm run generate-sdk:ruby\` first.`);
	}
	const version = readPackageVersion("ruby");
	const src = fs.readFileSync(VERSION_RB, "utf8");
	let replaced = false;
	const out = src.replace(/^(\s*VERSION\s*=\s*)'[^']*'(\s*)$/m, (_m, p1, p2) => {
		replaced = true;
		return `${p1}'${version}'${p2}`;
	});
	if (!replaced) {
		fail(`could not find a VERSION constant in ${rel(VERSION_RB)} to stamp`);
	}
	fs.writeFileSync(VERSION_RB, out, "utf8");
	console.log(`Stamped ${rel(VERSION_RB)}: VERSION = '${version}'`);
}

main();
