#!/usr/bin/env tsx
/**
 * place-node-tests.ts
 *
 * Mirrors the committed test source at `templates/node/tests/`
 * into the runnable location `sdks/node/tests/` after the
 * Node SDK has been (re)generated. The destination is git-ignored; the
 * SDK directory itself is wiped before each generation, so this script
 * always starts from a clean slate.
 *
 * Run from the repo root via `npm run place-node-tests` (chained into
 * `npm run generate-sdks`).
 */

import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const SRC = path.join(REPO_ROOT, "templates", "node", "tests");
const DEST = path.join(REPO_ROOT, "sdks", "node", "tests");

function main(): void {
	if (!fs.existsSync(SRC)) {
		console.error(`Source dir not found: ${SRC}`);
		process.exit(1);
	}
	const sdkDir = path.dirname(DEST);
	if (!fs.existsSync(sdkDir)) {
		console.error(
			`SDK dir not found: ${sdkDir}. Run \`npm run generate-sdk:node\` first.`,
		);
		process.exit(1);
	}

	fs.rmSync(DEST, { recursive: true, force: true });
	fs.cpSync(SRC, DEST, { recursive: true });

	const rel = path.relative(REPO_ROOT, DEST);
	console.log(`Placed tests: ${path.relative(REPO_ROOT, SRC)} -> ${rel}`);
}

main();
