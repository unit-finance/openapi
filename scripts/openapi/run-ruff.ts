#!/usr/bin/env tsx
/**
 * run-ruff.ts
 *
 * Lints the human-authored Python SDK test sources with ruff. It is the
 * lint analogue of `run-pytest.ts` and shares its self-contained model:
 *
 *   1. Resolves a Python interpreter ($UNIT_PYTHON override, else
 *      `python3`/`python` on PATH).
 *   2. Reuses (or bootstraps) the git-ignored virtualenv at
 *      `sdks/.python-venv/` — the same venv `run-pytest.ts`
 *      uses, kept beside `.maven` and outside the `sdks/python` tree that
 *      `generate-sdk:python` wipes.
 *   3. Installs a pinned ruff into that venv.
 *   4. Runs `ruff check` against `templates/python` — the
 *      committed source of truth — picking up `templates/python/ruff.toml`.
 *      The placed copy under `sdks/python/tests` is git-ignored and
 *      regenerated, so we never lint it directly.
 *
 * Extra args are forwarded to ruff, e.g.
 *   `tsx scripts/openapi/run-ruff.ts --fix`
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const TEMPLATE_DIR = path.join(REPO_ROOT, "templates", "python");
const VENV_DIR = path.join(REPO_ROOT, "sdks", ".python-venv");
const IS_WIN = process.platform === "win32";
const VENV_BIN = path.join(VENV_DIR, IS_WIN ? "Scripts" : "bin");
const VENV_PYTHON = path.join(VENV_BIN, IS_WIN ? "python.exe" : "python");

// Pin ruff so local and CI runs agree; bump intentionally.
const RUFF_SPEC = "ruff>=0.15.16,<0.16";

function rel(p: string): string {
	return path.relative(REPO_ROOT, p);
}

function fail(msg: string): never {
	console.error(`[run-ruff] ${msg}`);
	process.exit(1);
}

function run(cmd: string, args: string[]): void {
	const result = spawnSync(cmd, args, { stdio: "inherit", env: process.env });
	if (result.error) {
		fail(`Failed to launch ${cmd}: ${result.error.message}`);
	}
	if (result.status !== 0) {
		process.exit(result.status ?? 1);
	}
}

function resolveSystemPython(): string {
	const override = process.env.UNIT_PYTHON;
	if (override) return override;
	for (const candidate of ["python3", "python"]) {
		const probe = spawnSync(candidate, ["--version"], { stdio: "ignore" });
		if (probe.status === 0) return candidate;
	}
	return fail(
		"No Python interpreter found. Install Python 3.8+ or set $UNIT_PYTHON.",
	);
}

function ensureVenv(): void {
	if (fs.existsSync(VENV_PYTHON)) return;
	const python = resolveSystemPython();
	console.log(`[run-ruff] Creating virtualenv at ${rel(VENV_DIR)}...`);
	run(python, ["-m", "venv", VENV_DIR]);
}

function main(): void {
	if (!fs.existsSync(TEMPLATE_DIR)) {
		fail(`Template dir not found: ${rel(TEMPLATE_DIR)}.`);
	}

	ensureVenv();

	console.log("[run-ruff] Installing ruff...");
	run(VENV_PYTHON, ["-m", "pip", "install", "--quiet", "--upgrade", "pip"]);
	run(VENV_PYTHON, ["-m", "pip", "install", "--quiet", RUFF_SPEC]);

	console.log(`[run-ruff] Linting ${rel(TEMPLATE_DIR)}...`);
	const extraArgs = process.argv.slice(2);
	run(VENV_PYTHON, ["-m", "ruff", "check", TEMPLATE_DIR, ...extraArgs]);
}

main();
