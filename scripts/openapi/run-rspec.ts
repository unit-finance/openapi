#!/usr/bin/env tsx
/**
 * run-rspec.ts
 *
 * Self-contained runner for the Ruby SDK integration suite, the Ruby analogue
 * of `run-pytest.ts` / `run-mvn.ts`. It:
 *
 *   1. Resolves a Ruby interpreter ($UNIT_RUBY override, else `ruby` on PATH;
 *      bundler ships with Ruby 2.6+, so it is invoked as `ruby -S bundle`).
 *   2. Installs gems into a git-ignored vendored path at
 *      `sdks/.ruby-bundle/` (beside `.maven` / `.python-venv`,
 *      outside the `sdks/ruby` dir that `generate-sdk:ruby` wipes), via
 *      `BUNDLE_PATH`, using the placed `spec/Gemfile` that points at the
 *      freshly-generated gem (`gemspec path: '..'`) plus `rspec`/`dotenv`.
 *   3. Runs `bundle exec rspec` against the placed suite at
 *      `sdks/ruby/spec`, with the SDK dir as the working
 *      directory so the generated `.rspec` (`--require spec_helper`) loads the
 *      placed `spec/spec_helper.rb`.
 *
 * Like the Node/Java/Python suites, when `UNIT_SANDBOX_TOKEN` is unset every
 * example is skipped and the run still exits 0 (see spec/spec_helper.rb).
 *
 * Running the suite needs a Ruby interpreter on the host plus the native
 * libcurl that `typhoeus` binds to (libcurl ships by default on macOS and most
 * Linux distros). Generation itself needs neither — only the generator JAR.
 *
 * Usage: `tsx scripts/openapi/run-rspec.ts [extra rspec args...]`
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const SDK_DIR = path.join(REPO_ROOT, "sdks", "ruby");
const SPEC_DIR = path.join(SDK_DIR, "spec");
const GEMFILE = path.join(SPEC_DIR, "Gemfile");
const BUNDLE_DIR = path.join(REPO_ROOT, "sdks", ".ruby-bundle");

function rel(p: string): string {
	return path.relative(REPO_ROOT, p);
}

function fail(msg: string): never {
	console.error(`[run-rspec] ${msg}`);
	process.exit(1);
}

function resolveRuby(): string {
	const override = process.env.UNIT_RUBY;
	if (override) return override;
	for (const candidate of ["ruby"]) {
		const probe = spawnSync(candidate, ["--version"], { stdio: "ignore" });
		if (probe.status === 0) return candidate;
	}
	return fail("No Ruby interpreter found. Install Ruby 2.7+ or set $UNIT_RUBY.");
}

function run(cmd: string, args: string[], cwd: string): void {
	const result = spawnSync(cmd, args, {
		stdio: "inherit",
		cwd,
		env: {
			...process.env,
			BUNDLE_GEMFILE: GEMFILE,
			BUNDLE_PATH: BUNDLE_DIR,
		},
	});
	if (result.error) {
		fail(`Failed to launch ${cmd}: ${result.error.message}`);
	}
	if (result.status !== 0) {
		process.exit(result.status ?? 1);
	}
}

function main(): void {
	if (!fs.existsSync(SDK_DIR)) {
		fail(`SDK dir not found: ${rel(SDK_DIR)}. Run \`npm run generate-sdk:ruby\` first.`);
	}
	if (!fs.existsSync(GEMFILE)) {
		fail(`Tests Gemfile not found: ${rel(GEMFILE)}. Run \`npm run place-ruby-tests\` first.`);
	}

	const ruby = resolveRuby();

	console.log("[run-rspec] Installing gem (path) + test deps...");
	run(ruby, ["-S", "bundle", "install"], SDK_DIR);

	console.log("[run-rspec] Running rspec...");
	const extraArgs = process.argv.slice(2);
	run(ruby, ["-S", "bundle", "exec", "rspec", "spec", ...extraArgs], SDK_DIR);
}

main();
