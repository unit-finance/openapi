#!/usr/bin/env tsx
/**
 * run-pytest.ts
 *
 * Self-contained runner for the Python SDK integration suite, the Python
 * analogue of `run-mvn.ts`. It:
 *
 *   1. Resolves a Python interpreter ($UNIT_PYTHON override, else
 *      `python3`/`python` on PATH).
 *   2. Bootstraps a git-ignored virtualenv at
 *      `sdks/.python-venv/` (beside `.maven`, outside the
 *      `sdks/python` dir that `generate-sdk:python` wipes), so the test
 *      target is self-contained and needs only a Python interpreter on
 *      the host.
 *   3. Installs the freshly-generated SDK in editable mode plus the test
 *      dependencies (pytest, python-dotenv).
 *   4. Runs pytest against the placed suite at `sdks/python/tests`.
 *
 * Like the Node/Java suites, when `UNIT_SANDBOX_TOKEN` is unset every test
 * is skipped and the run still exits 0 (see tests/conftest.py).
 *
 * Usage: `tsx scripts/openapi/run-pytest.ts [extra pytest args...]`
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const SDK_DIR = path.join(REPO_ROOT, "sdks", "python");
const TESTS_DIR = path.join(SDK_DIR, "tests");
const VENV_DIR = path.join(REPO_ROOT, "sdks", ".python-venv");
const IS_WIN = process.platform === "win32";
const VENV_BIN = path.join(VENV_DIR, IS_WIN ? "Scripts" : "bin");
const VENV_PYTHON = path.join(VENV_BIN, IS_WIN ? "python.exe" : "python");

function rel(p: string): string {
	return path.relative(REPO_ROOT, p);
}

function fail(msg: string): never {
	console.error(`[run-pytest] ${msg}`);
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
	console.log(`[run-pytest] Creating virtualenv at ${rel(VENV_DIR)}...`);
	run(python, ["-m", "venv", VENV_DIR]);
}

function main(): void {
	if (!fs.existsSync(SDK_DIR)) {
		fail(`SDK dir not found: ${rel(SDK_DIR)}. Run \`npm run generate-sdk:python\` first.`);
	}
	if (!fs.existsSync(TESTS_DIR)) {
		fail(`Tests dir not found: ${rel(TESTS_DIR)}. Run \`npm run place-python-tests\` first.`);
	}

	ensureVenv();

	console.log("[run-pytest] Installing SDK (editable) + test deps...");
	run(VENV_PYTHON, ["-m", "pip", "install", "--quiet", "--upgrade", "pip"]);
	run(VENV_PYTHON, ["-m", "pip", "install", "--quiet", "-e", SDK_DIR]);
	run(VENV_PYTHON, ["-m", "pip", "install", "--quiet", "pytest", "python-dotenv"]);

	console.log("[run-pytest] Running pytest...");
	const extraArgs = process.argv.slice(2);
	run(VENV_PYTHON, ["-m", "pytest", TESTS_DIR, ...extraArgs]);
}

main();
