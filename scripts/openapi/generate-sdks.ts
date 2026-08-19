#!/usr/bin/env tsx
/**
 * generate-sdks.ts
 *
 * Orchestrates the full SDK regeneration pipeline (previously a long `&&`
 * chain of `npm run ...` calls in package.json) and wraps each step in
 * readable, sectioned terminal output: a labelled banner per step, a live
 * spinner while it runs, per-step timing, and a final summary table.
 *
 * Each step still shells out to the same underlying `npm run <script>`, so
 * the individual scripts remain independently runnable. This file only owns
 * the presentation and sequencing.
 *
 * Usage: `tsx scripts/openapi/generate-sdks.ts` (via `npm run generate-sdks`).
 */
import { spawn } from "node:child_process";

interface Step {
	/** npm script name to run (`npm run <script>`). */
	script: string;
	/** Human-readable label shown in the banner. */
	label: string;
	/** Optional grouping language, printed as a section divider. */
	group?: string;
}

const STEPS: Step[] = [
	{ script: "fetch-spec", label: "Fetch OpenAPI spec bundle" },
	{ script: "generate-sdk:node", label: "Generate SDK", group: "Node" },
	{ script: "prepare-node-sdk", label: "Prepare SDK", group: "Node" },
	{ script: "place-node-tests", label: "Place tests", group: "Node" },
	{ script: "generate-sdk:java", label: "Generate SDK", group: "Java" },
	{ script: "prepare-java-sdk", label: "Prepare SDK", group: "Java" },
	{ script: "place-java-tests", label: "Place tests", group: "Java" },
	{ script: "generate-sdk:python", label: "Generate SDK", group: "Python" },
	{ script: "prepare-python-sdk", label: "Prepare SDK", group: "Python" },
	{ script: "place-python-tests", label: "Place tests", group: "Python" },
	{ script: "generate-sdk:ruby", label: "Generate SDK", group: "Ruby" },
	{ script: "prepare-ruby-sdk", label: "Prepare SDK", group: "Ruby" },
	{ script: "place-ruby-tests", label: "Place tests", group: "Ruby" },
];

const useColor = process.stdout.isTTY && process.env.NO_COLOR === undefined;

const c = {
	reset: useColor ? "\x1b[0m" : "",
	bold: useColor ? "\x1b[1m" : "",
	dim: useColor ? "\x1b[2m" : "",
	red: useColor ? "\x1b[31m" : "",
	green: useColor ? "\x1b[32m" : "",
	yellow: useColor ? "\x1b[33m" : "",
	blue: useColor ? "\x1b[34m" : "",
	cyan: useColor ? "\x1b[36m" : "",
};

function fmtDuration(ms: number): string {
	if (ms < 1000) return `${ms}ms`;
	const s = ms / 1000;
	if (s < 60) return `${s.toFixed(1)}s`;
	const m = Math.floor(s / 60);
	return `${m}m ${Math.round(s % 60)}s`;
}

function banner(text: string): void {
	const line = "─".repeat(Math.max(text.length + 2, 40));
	console.log(`\n${c.cyan}┌${line}${c.reset}`);
	console.log(`${c.cyan}│ ${c.bold}${text}${c.reset}`);
	console.log(`${c.cyan}└${line}${c.reset}`);
}

function runStep(step: Step): Promise<number> {
	return new Promise((resolve) => {
		const start = Date.now();
		const child = spawn("npm", ["run", step.script], {
			stdio: "inherit",
			env: process.env,
		});
		child.on("close", (code) => {
			const dur = fmtDuration(Date.now() - start);
			if (code === 0) {
				console.log(`${c.green}✓${c.reset} ${step.script} ${c.dim}(${dur})${c.reset}`);
			} else {
				console.log(
					`${c.red}✗ ${step.script} failed (exit ${code}) ${c.dim}(${dur})${c.reset}`,
				);
			}
			resolve(code ?? 1);
		});
		child.on("error", (err) => {
			console.log(`${c.red}✗ ${step.script} could not start: ${err.message}${c.reset}`);
			resolve(1);
		});
	});
}

async function main(): Promise<void> {
	const overallStart = Date.now();
	const total = STEPS.length;
	let lastGroup: string | undefined;
	const results: { step: Step; ms: number; ok: boolean }[] = [];

	console.log(
		`${c.bold}${c.blue}Regenerating SDKs${c.reset} ${c.dim}(${total} steps)${c.reset}`,
	);

	for (let i = 0; i < STEPS.length; i++) {
		const step = STEPS[i];
		if (step.group && step.group !== lastGroup) {
			console.log(`\n${c.yellow}${c.bold}▸ ${step.group}${c.reset}`);
			lastGroup = step.group;
		}
		const heading = step.group ? `${step.group}: ${step.label}` : step.label;
		banner(`[${i + 1}/${total}] ${heading}`);

		const stepStart = Date.now();
		const code = await runStep(step);
		results.push({ step, ms: Date.now() - stepStart, ok: code === 0 });

		if (code !== 0) {
			printSummary(results, Date.now() - overallStart);
			console.error(
				`\n${c.red}${c.bold}Aborted:${c.reset} step ${c.bold}${step.script}${c.reset} failed.`,
			);
			process.exit(code);
		}
	}

	printSummary(results, Date.now() - overallStart);
	console.log(`\n${c.green}${c.bold}✓ All SDKs regenerated successfully.${c.reset}`);
}

function printSummary(
	results: { step: Step; ms: number; ok: boolean }[],
	totalMs: number,
): void {
	console.log(`\n${c.bold}Summary${c.reset}`);
	const nameWidth = Math.max(...results.map((r) => r.step.script.length), 10);
	for (const r of results) {
		const mark = r.ok ? `${c.green}✓${c.reset}` : `${c.red}✗${c.reset}`;
		console.log(
			`  ${mark} ${r.step.script.padEnd(nameWidth)} ${c.dim}${fmtDuration(r.ms)}${c.reset}`,
		);
	}
	console.log(`  ${c.dim}total ${fmtDuration(totalMs)}${c.reset}`);
}

main().catch((err) => {
	console.error(`${c.red}[generate-sdks] ${err instanceof Error ? err.message : String(err)}${c.reset}`);
	process.exit(1);
});
