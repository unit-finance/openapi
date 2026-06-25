#!/usr/bin/env tsx
/**
 * place-ruby-tests.ts
 *
 * Mirrors the committed test source at `templates/ruby/spec/`
 * into the runnable location `sdks/ruby/spec/` after the Ruby SDK
 * has been (re)generated. The destination is git-ignored; `generate-sdk:ruby`
 * suppresses the generator's own `spec/**` stubs, so the placed integration
 * suite owns `spec/` exclusively.
 *
 * The placed `spec/` also carries a `Gemfile` (referencing the generated gem
 * by path plus `rspec`/`dotenv`), which `run-rspec.ts` installs against. The
 * generated `.rspec` at the SDK root (`--require spec_helper`) then loads the
 * placed `spec/spec_helper.rb`.
 *
 * It also ships `templates/ruby/.env.example` to the SDK root and
 * makes the standalone project's `.gitignore` exclude the real `.env`, so the
 * sandbox credentials convention travels with the extracted SDK.
 *
 * Finally, mirroring Node/Java/Python, if a git-ignored
 * `templates/ruby/.env` exists it is copied to the SDK root
 * (`sdks/ruby/.env`) so the in-repo dev loop can keep credentials
 * in `templates/` (outside the wiped output tree) instead of recreating them
 * after every regeneration.
 *
 * Run from the repo root via `npm run place-ruby-tests` (chained into
 * `npm run generate-sdks`).
 */

import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const TEMPLATE_DIR = path.join(REPO_ROOT, "templates", "ruby");
const SRC = path.join(TEMPLATE_DIR, "spec");
const SDK_DIR = path.join(REPO_ROOT, "sdks", "ruby");
const DEST = path.join(SDK_DIR, "spec");
const ENV_EXAMPLE_SRC = path.join(TEMPLATE_DIR, ".env.example");
const ENV_EXAMPLE_DEST = path.join(SDK_DIR, ".env.example");
const ENV_SRC = path.join(TEMPLATE_DIR, ".env");
const ENV_DEST = path.join(SDK_DIR, ".env");
const SDK_GITIGNORE = path.join(SDK_DIR, ".gitignore");

function rel(p: string): string {
	return path.relative(REPO_ROOT, p);
}

function main(): void {
	if (!fs.existsSync(SRC)) {
		console.error(`Source dir not found: ${SRC}`);
		process.exit(1);
	}
	if (!fs.existsSync(SDK_DIR)) {
		console.error(
			`SDK dir not found: ${SDK_DIR}. Run \`npm run generate-sdk:ruby\` first.`,
		);
		process.exit(1);
	}

	fs.rmSync(DEST, { recursive: true, force: true });
	fs.cpSync(SRC, DEST, { recursive: true });
	console.log(`Placed tests: ${rel(SRC)} -> ${rel(DEST)}`);

	if (fs.existsSync(ENV_EXAMPLE_SRC)) {
		fs.copyFileSync(ENV_EXAMPLE_SRC, ENV_EXAMPLE_DEST);
		console.log(`Placed env example: ${rel(ENV_EXAMPLE_SRC)} -> ${rel(ENV_EXAMPLE_DEST)}`);
	}

	// Mirror Node/Java/Python: a dev-maintained, git-ignored
	// `templates/ruby/.env` is copied into the SDK so the upward `.env` search
	// in spec_helper finds it.
	if (fs.existsSync(ENV_SRC)) {
		fs.copyFileSync(ENV_SRC, ENV_DEST);
		console.log(`Placed env: ${rel(ENV_SRC)} -> ${rel(ENV_DEST)}`);
	}

	// The standalone SDK's generated .gitignore does not exclude `.env`; add it
	// so a developer's real credentials never get committed from the extracted
	// project. Idempotent, so regeneration stays drift-free.
	if (fs.existsSync(SDK_GITIGNORE)) {
		const ignore = fs.readFileSync(SDK_GITIGNORE, "utf8");
		if (!ignore.split(/\r?\n/).includes(".env")) {
			fs.appendFileSync(
				SDK_GITIGNORE,
				`${ignore.endsWith("\n") ? "" : "\n"}.env\n`,
			);
		}
	}
}

main();
