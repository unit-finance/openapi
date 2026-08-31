#!/usr/bin/env tsx
/**
 * run-and-copy.ts
 *
 * Runs a command, streaming its output to the terminal unchanged, while also
 * capturing it. On failure (non-zero exit) in an interactive local run, the
 * captured output is copied to the clipboard prefixed with a ready-to-paste
 * prompt, so it can be dropped straight into an agent:
 *
 *   explain and categorize test failures
 *
 *   <captured output>
 *
 * The child's exit code is always propagated. Clipboard copying is skipped when
 * not attached to a TTY or when running in CI, so automated runs are unaffected.
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

const chunks: Buffer[] = [];

const child = spawn(command, args, {
	// Inherit stdin so interactive prompts still work; pipe stdout/stderr so we
	// can both tee them to our own streams and capture them for the clipboard.
	stdio: ["inherit", "pipe", "pipe"],
	env: process.env,
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

child.on("close", (code) => {
	const exitCode = code ?? 1;
	const interactive = process.stdout.isTTY && !process.env.CI;
	if (exitCode !== 0 && interactive) {
		const output = Buffer.concat(chunks).toString("utf8");
		const payload = `${PROMPT}\n\n${output}`;
		if (copyToClipboard(payload)) {
			console.error(
				`\n[run-and-copy] Test output copied to clipboard with prompt: "${PROMPT}"`,
			);
		}
	}
	process.exit(exitCode);
});

child.on("error", (err) => {
	console.error(`[run-and-copy] Failed to run ${command}: ${err.message}`);
	process.exit(1);
});
