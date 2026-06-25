#!/usr/bin/env tsx
/**
 * place-java-tests.ts
 *
 * Mirrors the committed test source at `templates/java/tests/`
 * into the runnable location `sdks/java/src/test/java/` after the
 * Java SDK has been (re)generated. The destination is git-ignored; the SDK
 * directory itself is wiped before each generation, so this script always
 * starts from a clean slate.
 *
 * It also ships `templates/java/.env.example` to the SDK root and
 * makes the standalone project's `.gitignore` exclude the real `.env`, so the
 * sandbox credentials convention travels with the extracted SDK.
 *
 * Finally, mirroring Node's `templates/node/tests/.env`, if a git-ignored
 * `templates/java/.env` exists it is copied to the SDK root
 * (`sdks/java/.env`) — the first location `ApiSupport`'s upward
 * `.env` search finds when Surefire runs from the module dir. This lets the
 * in-repo dev loop keep credentials in `templates/` (outside the wiped output
 * tree) instead of recreating them after every regeneration.
 *
 * Run from the repo root via `npm run place-java-tests` (chained into
 * `npm run generate-sdks`).
 */

import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const TEMPLATE_DIR = path.join(REPO_ROOT, "templates", "java");
const SRC = path.join(TEMPLATE_DIR, "tests");
const SDK_DIR = path.join(REPO_ROOT, "sdks", "java");
const DEST = path.join(SDK_DIR, "src", "test", "java");
const ENV_EXAMPLE_SRC = path.join(TEMPLATE_DIR, ".env.example");
const ENV_EXAMPLE_DEST = path.join(SDK_DIR, ".env.example");
const ENV_SRC = path.join(TEMPLATE_DIR, ".env");
const ENV_DEST = path.join(SDK_DIR, ".env");
const SDK_GITIGNORE = path.join(SDK_DIR, ".gitignore");

function main(): void {
	if (!fs.existsSync(SRC)) {
		console.error(`Source dir not found: ${SRC}`);
		process.exit(1);
	}
	if (!fs.existsSync(SDK_DIR)) {
		console.error(
			`SDK dir not found: ${SDK_DIR}. Run \`npm run generate-sdk:java\` first.`,
		);
		process.exit(1);
	}

	fs.rmSync(DEST, { recursive: true, force: true });
	fs.mkdirSync(DEST, { recursive: true });
	fs.cpSync(SRC, DEST, { recursive: true });

	console.log(
		`Placed tests: ${path.relative(REPO_ROOT, SRC)} -> ${path.relative(
			REPO_ROOT,
			DEST,
		)}`,
	);

	if (fs.existsSync(ENV_EXAMPLE_SRC)) {
		fs.copyFileSync(ENV_EXAMPLE_SRC, ENV_EXAMPLE_DEST);
		console.log(
			`Placed env example: ${path.relative(REPO_ROOT, ENV_EXAMPLE_SRC)} -> ${path.relative(
				REPO_ROOT,
				ENV_EXAMPLE_DEST,
			)}`,
		);
	}

	// Mirror Node: a dev-maintained, git-ignored `templates/java/.env` is
	// copied into the SDK so the upward `.env` search in ApiSupport finds it.
	if (fs.existsSync(ENV_SRC)) {
		fs.copyFileSync(ENV_SRC, ENV_DEST);
		console.log(
			`Placed env: ${path.relative(REPO_ROOT, ENV_SRC)} -> ${path.relative(
				REPO_ROOT,
				ENV_DEST,
			)}`,
		);
	}

	// The standalone SDK's generated .gitignore does not exclude `.env`; add it
	// so a developer's real credentials never get committed from the extracted
	// project. Idempotent, so regeneration stays drift-free.
	if (fs.existsSync(SDK_GITIGNORE)) {
		const ignore = fs.readFileSync(SDK_GITIGNORE, "utf8");
		if (!ignore.split(/\r?\n/).includes(".env")) {
			fs.appendFileSync(SDK_GITIGNORE, `${ignore.endsWith("\n") ? "" : "\n"}.env\n`);
		}
	}
}

main();
