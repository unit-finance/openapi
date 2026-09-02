#!/usr/bin/env tsx
/**
 * run-and-copy.ts
 *
 * Runs a command, streaming its output to the terminal unchanged, while also
 * capturing it. Two things make the local experience nicer:
 *
 *   1. Formatting is preserved. When attached to an interactive terminal we
 *      export FORCE_COLOR / CLICOLOR_FORCE so the test tools (jest, pytest,
 *      mvn, rspec, ruff) keep emitting their colored, aligned output even
 *      though we pipe their streams to capture them. The individual runners
 *      read these env vars and pass the matching `--color`-style flags.
 *
 *   2. When the run finishes in an interactive local session, we present a
 *      small menu instead of exiting immediately:
 *
 *        (c) - Copy test output with a prompt into buffer
 *        (r) - Run the tests again
 *        (q) - Quit the test runner
 *
 *      Copying puts the full captured output on the clipboard prefixed with a
 *      ready-to-paste prompt so it can be dropped straight into an agent.
 *      Re-running spawns the same command afresh and re-captures its output.
 *
 * The child's exit code is always propagated. The menu and clipboard copying
 * are skipped when not attached to a TTY or when running in CI, so automated
 * runs are unaffected.
 *
 * Usage: tsx scripts/openapi/run-and-copy.ts <command> [args...]
 */
import { spawn, spawnSync } from "node:child_process";

const PROMPT = "explain and categorize test failures";

const [command, ...args] = process.argv.slice(2);
if (!command) {
	console.error("[run-and-copy] No command supplied");
	process.exit(1);
}

const interactive = Boolean(process.stdout.isTTY) && !process.env.CI;

// Output captured from the most recent run; reset each time we (re-)spawn so the
// clipboard payload always reflects the latest run.
let chunks: Buffer[] = [];

const childEnv = interactive
	? {
			...process.env,
			// Force colored/formatted output even though the child's stdout is
			// a pipe rather than a TTY. Covers the ecosystems we run:
			// FORCE_COLOR -> node/jest/ruff, CLICOLOR_FORCE -> ruby & friends.
			FORCE_COLOR: process.env.FORCE_COLOR ?? "1",
			CLICOLOR_FORCE: process.env.CLICOLOR_FORCE ?? "1",
		}
	: process.env;

/** Spawn the command once, teeing and capturing output; resolve with its code. */
function runChild(): Promise<number> {
	chunks = [];
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, {
			// Inherit stdin so interactive prompts still work; pipe stdout/stderr
			// so we can both tee them to our own streams and capture them.
			stdio: ["inherit", "pipe", "pipe"],
			env: childEnv,
			shell: false,
		});

		child.stdout.on("data", (buf: Buffer) => {
			process.stdout.write(buf);
			chunks.push(buf);
		});
		child.stderr.on("data", (buf: Buffer) => {
			process.stderr.write(buf);
			chunks.push(buf);
		});

		child.on("close", (code) => resolve(code ?? 1));
		child.on("error", reject);
	});
}

/** Copy text to the clipboard via the platform tool. Best-effort, silent. */
function copyToClipboard(text: string): boolean {
	const candidates =
		process.platform === "darwin"
			? [["pbcopy", [] as string[]]]
			: process.platform === "win32"
				? [["clip", [] as string[]]]
				: [
						["wl-copy", [] as string[]],
						["xclip", ["-selection", "clipboard"]],
						["xsel", ["--clipboard", "--input"]],
					];
	for (const [bin, binArgs] of candidates as Array<[string, string[]]>) {
		const res = spawnSync(bin, binArgs, { input: text });
		if (res.status === 0) return true;
	}
	return false;
}

/** Strip ANSI escape codes so the clipboard payload is plain text. */
function stripAnsi(text: string): string {
	// eslint-disable-next-line no-control-regex
	return text.replace(/\u001b\[[0-9;]*[A-Za-z]/g, "");
}

const BOLD = "\u001b[1m";
const DIM = "\u001b[2m";
const CYAN = "\u001b[36m";
const RESET = "\u001b[0m";

function renderMenu(): void {
	const lines = [
		"",
		`${DIM}────────────────────────────────────────────${RESET}`,
		`${BOLD}Test run finished.${RESET} What next?`,
		`  ${CYAN}(c)${RESET} Copy test output with a prompt into buffer`,
		`  ${CYAN}(r)${RESET} Run the tests again`,
		`  ${CYAN}(q)${RESET} Quit the test runner`,
		`${DIM}────────────────────────────────────────────${RESET}`,
	];
	process.stderr.write(`${lines.join("\n")}\n`);
}

type MenuAction = "quit" | "rerun";

/** Show the post-run menu and resolve with the action the user chose. */
function promptMenu(): Promise<MenuAction> {
	return new Promise((resolve) => {
		const stdin = process.stdin;
		renderMenu();

		const cleanup = () => {
			stdin.removeListener("data", onData);
			if (stdin.isTTY) stdin.setRawMode(false);
			stdin.pause();
		};

		const onData = (data: Buffer) => {
			const key = data.toString("utf8").toLowerCase();
			// Ctrl-C / Ctrl-D also quit.
			if (key === "q" || key === "\u0003" || key === "\u0004") {
				cleanup();
				resolve("quit");
				return;
			}
			if (key === "r") {
				cleanup();
				resolve("rerun");
				return;
			}
			if (key === "c") {
				const output = stripAnsi(Buffer.concat(chunks).toString("utf8"));
				const payload = `${PROMPT}\n\n${output}`;
				if (copyToClipboard(payload)) {
					process.stderr.write(
						`\n${BOLD}Copied${RESET} test output to clipboard with prompt: "${PROMPT}"\n`,
					);
				} else {
					process.stderr.write(
						`\n[run-and-copy] Could not access the clipboard.\n`,
					);
				}
				renderMenu();
			}
		};

		stdin.resume();
		if (stdin.isTTY) stdin.setRawMode(true);
		stdin.on("data", onData);
	});
}

async function main(): Promise<never> {
	for (;;) {
		let exitCode: number;
		try {
			exitCode = await runChild();
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			console.error(`[run-and-copy] Failed to run ${command}: ${message}`);
			process.exit(1);
		}

		if (!interactive) {
			process.exit(exitCode);
		}

		const action = await promptMenu();
		if (action === "quit") {
			process.exit(exitCode);
		}
		// action === "rerun": loop and spawn the command again.
	}
}

void main();
