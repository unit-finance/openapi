#!/usr/bin/env tsx
/**
 * place-python-tests.ts
 *
 * Mirrors the committed test source at `templates/python/tests/`
 * into the runnable location `sdks/python/tests/` after the
 * Python SDK has been (re)generated. The destination is git-ignored; the
 * SDK directory itself is wiped before each generation, so this script
 * always starts from a clean slate.
 *
 * It also ships `templates/python/.env.example` to the SDK root
 * and makes the standalone project's `.gitignore` exclude the real `.env`,
 * so the sandbox credentials convention travels with the extracted SDK.
 *
 * Finally, mirroring Node/Java, if a git-ignored
 * `templates/python/.env` exists it is copied to the SDK root
 * (`sdks/python/.env`) so the in-repo dev loop can keep
 * credentials in `templates/` (outside the wiped output tree) instead of
 * recreating them after every regeneration.
 *
 * Run from the repo root via `npm run place-python-tests` (chained into
 * `npm run generate-sdks`).
 */

import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const TEMPLATE_DIR = path.join(REPO_ROOT, "templates", "python");
const SRC = path.join(TEMPLATE_DIR, "tests");
const SDK_DIR = path.join(REPO_ROOT, "sdks", "python");
const DEST = path.join(SDK_DIR, "tests");
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
			`SDK dir not found: ${SDK_DIR}. Run \`npm run generate-sdk:python\` first.`,
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

	// Mirror Node/Java: a dev-maintained, git-ignored `templates/python/.env`
	// is copied into the SDK so the upward `.env` search in conftest finds it.
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
