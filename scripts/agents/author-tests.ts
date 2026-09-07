#!/usr/bin/env tsx
/**
 * author-tests.ts
 *
 * Drives a Cursor agent (Cursor SDK, local runtime) to author or repair the
 * hand-written integration tests under `templates/<lang>/` for spec operations
 * that lack coverage. Invoked by the spec-regeneration workflow after
 * regeneration, and runnable standalone via `npm run author-tests`.
 *
 * Inputs:
 *   - A coverage report produced by `scripts/openapi/test-coverage-report.ts`
 *     (`--report <file>`, default `test-coverage-report.json`). If it has no
 *     gaps, this script is a no-op and exits 0.
 *   - `$CURSOR_API_KEY`  — Cursor user / service-account key (required).
 *   - `$UNIT_SANDBOX_TOKEN` — optional; when present the agent can run the
 *     sandbox suites to validate; when absent the suites self-skip (exit 0).
 *
 * Runtime: local (runs against this checkout's `cwd`), so the agent reuses the
 * already-installed Node/JDK/Python/Ruby toolchain and the sandbox token to
 * validate what it writes. Its edits to `templates/` plus the regenerated
 * `sdks/` are picked up by the workflow's create-pull-request step.
 *
 * Exit codes (per Cursor SDK best practice):
 *   0  no gaps, or agent finished successfully
 *   1  the run never started (CursorAgentError: auth/config/network) or misconfig
 *   2  the run started but ended in error
 *
 * Usage: `tsx scripts/agents/author-tests.ts [--report <file>] [--model <id>]`
 *
 * Offline mode: pass `--print-prompt` to write the exact prompt the agent would
 * receive to stdout and exit, without a Cursor API key, network, or the SDK.
 * Use it to author the tests manually (paste into a chat/agent). Exits 0 when
 * there are gaps (prompt printed) or when there are none (nothing to do).
 */

import fs from "node:fs";
import path from "node:path";
import { Agent, Cursor, CursorAgentError, type SDKMessage } from "@cursor/sdk";

const REPO_ROOT = process.cwd();

// The SDK's local executor streams and traces on async paths; an error thrown
// there escapes main()'s try/catch and crashes Node, which prints the minified
// bundle source (index.js:1) but truncates the real stack in CI logs. Catch it
// at the process level so the underlying error is always surfaced in full.
process.on("uncaughtException", (err: unknown) => {
	console.error("[author-tests] uncaughtException:");
	console.error(err instanceof Error ? (err.stack ?? err.message) : String(err));
	process.exit(2);
});
process.on("unhandledRejection", (reason: unknown) => {
	console.error("[author-tests] unhandledRejection:");
	console.error(reason instanceof Error ? (reason.stack ?? reason.message) : String(reason));
	process.exit(2);
});

type Lang = "node" | "java" | "python" | "ruby";

interface OperationCoverage {
	tag: string;
	operationId: string;
	method: string;
	path: string;
	covered: Record<Lang, boolean>;
	missingLanguages: Lang[];
}

interface CoverageReport {
	totalOperations: number;
	languages: Lang[];
	operations: OperationCoverage[];
	gaps: OperationCoverage[];
	hasGaps: boolean;
}

/** Where each language's source-of-truth tests live + the test runner script. */
const LANG_INFO: Record<
	Lang,
	{ testDir: string; readme: string; example: string; testScript: string }
> = {
	node: {
		testDir: "templates/node/tests",
		readme: "templates/node/tests/README.md",
		example: "templates/node/tests/applications/create.test.ts",
		testScript: "npm run test:sdk:node",
	},
	java: {
		testDir: "templates/java/tests",
		readme: "templates/node/tests/README.md",
		example: "templates/java/tests/com/unit/finance/sdk/it/ListApplicationsIT.java",
		testScript: "npm run test:sdk:java",
	},
	python: {
		testDir: "templates/python/tests",
		readme: "templates/python/tests/README.md",
		example: "templates/python/tests/applications/test_cancel.py",
		testScript: "npm run test:sdk:python",
	},
	ruby: {
		testDir: "templates/ruby/spec",
		readme: "templates/ruby/spec/README.md",
		example: "templates/ruby/spec/applications/cancel_spec.rb",
		testScript: "npm run test:sdk:ruby",
	},
};

function arg(flag: string): string | undefined {
	const i = process.argv.indexOf(flag);
	return i !== -1 ? process.argv[i + 1] : undefined;
}

function hasFlag(flag: string): boolean {
	return process.argv.includes(flag);
}

function readReport(reportPath: string): CoverageReport {
	if (!fs.existsSync(reportPath)) {
		console.error(
			`[author-tests] coverage report not found: ${path.relative(REPO_ROOT, reportPath)}. ` +
				"Run `npm run test-coverage` first.",
		);
		process.exit(1);
	}
	return JSON.parse(fs.readFileSync(reportPath, "utf8")) as CoverageReport;
}

/**
 * Print a readable, per-language breakdown of the coverage gaps to stderr. Kept
 * on stderr so it stays visible in the terminal even when stdout (the prompt) is
 * piped to the clipboard or a file.
 */
function printGapSummary(report: CoverageReport): void {
	const byLang: Record<Lang, OperationCoverage[]> = { node: [], java: [], python: [], ruby: [] };
	for (const gap of report.gaps) {
		for (const lang of gap.missingLanguages) byLang[lang].push(gap);
	}

	const rule = "─".repeat(64);
	const opCount = report.gaps.length;
	const langCount = (Object.keys(byLang) as Lang[]).filter((l) => byLang[l].length > 0).length;

	console.error("");
	console.error(rule);
	console.error(
		`  Coverage gaps: ${opCount} operation(s) across ${langCount} language(s)`,
	);
	console.error(`  (out of ${report.totalOperations} total operations)`);
	console.error(rule);

	for (const lang of Object.keys(byLang) as Lang[]) {
		const gaps = byLang[lang];
		if (gaps.length === 0) continue;
		console.error("");
		console.error(`  ${lang.toUpperCase()}  (${gaps.length} needed)  →  ${LANG_INFO[lang].testDir}`);
		for (const g of gaps) {
			console.error(`    • ${g.operationId.padEnd(32)} ${g.method.toUpperCase().padEnd(6)} ${g.path}  [${g.tag}]`);
		}
	}

	console.error("");
	console.error(rule);
	console.error("  Full prompt written to stdout (copied to clipboard via author-tests-local).");
	console.error(rule);
	console.error("");
}

function buildPrompt(report: CoverageReport): string {
	// Group gaps by language so the agent knows exactly what to write where.
	const byLang: Record<Lang, OperationCoverage[]> = { node: [], java: [], python: [], ruby: [] };
	for (const gap of report.gaps) {
		for (const lang of gap.missingLanguages) byLang[lang].push(gap);
	}

	const sections: string[] = [];
	for (const lang of Object.keys(byLang) as Lang[]) {
		const gaps = byLang[lang];
		if (gaps.length === 0) continue;
		const info = LANG_INFO[lang];
		const lines = gaps
			.map((g) => `    - [${g.tag}] ${g.operationId}  (${g.method.toUpperCase()} ${g.path})`)
			.join("\n");
		sections.push(
			`  ${lang.toUpperCase()} (test tree: ${info.testDir})\n` +
				`    Conventions doc: ${info.readme}\n` +
				`    Mirror this existing test as your pattern: ${info.example}\n` +
				`    Runner (validate with this): ${info.testScript}\n` +
				`    Operations needing coverage:\n${lines}`,
		);
	}

	return [
		"You are maintaining the integration-test suites for the Unit API SDKs in this repository.",
		"The SDKs are generated by OpenAPI Generator from spec/openapi.bundled.json; the hand-written",
		"integration tests are the source of truth under templates/<lang>/ and are mirrored into",
		"sdks/<lang>/ on every `npm run generate-sdks`.",
		"",
		"GOAL: write (or repair) integration tests so every operation below is covered in the listed",
		"language, matching the existing structure, helpers, and assertion style exactly.",
		"",
		"HARD CONSTRAINTS:",
		"  - Only create or edit files under templates/<lang>/ (the source-of-truth test trees:",
		"    templates/node/tests, templates/python/tests, templates/ruby/spec, templates/java/tests).",
		"  - NEVER edit anything under sdks/ directly. That tree is generated and wiped; a CI drift",
		"    gate fails on manual edits. After changing templates, run `npm run generate-sdks` to",
		"    re-mirror your tests into sdks/ before validating.",
		"  - Do not touch the spec, generator config, publish/CI workflows, or unrelated files.",
		"",
		"CONVENTIONS TO FOLLOW (read the per-language README and the example file cited below):",
		"  - Reuse the shared helpers/ in each test tree (API construction, fixtures, shared app).",
		"  - Gate every suite on the sandbox token so it self-skips when UNIT_SANDBOX_TOKEN is unset",
		"    (node `describeIfToken`, python `@requires_token`, java `ApiSupport.assumeToken()`,",
		"    ruby `:sandbox` tagging) and the run still exits 0.",
		"  - One test file per operation, named to match the existing files in that tree.",
		"  - Assert structural correctness only (HTTP status, JSON:API envelope shape, data.type,",
		"    data.id, expected attribute keys) -- not specific approval/decision states.",
		"  - Tag any resources you create in the sandbox with tags.testRun so they are traceable.",
		"",
		"VALIDATION (do this before finishing):",
		"  UNIT_SANDBOX_TOKEN is intentionally UNSET in this run, so the live sandbox suites will",
		"  self-skip. Do NOT try to run tests against the live API. Your bar is: the suites compile,",
		"  lint, and load cleanly (skipped == success here). The opened PR's own CI runs them live.",
		"",
		"  While iterating, keep the loop CHEAP -- do NOT run the full `npm run generate-sdks` (it",
		"  rebuilds all four SDKs from scratch and is very slow). Instead, for each language you touched:",
		"    1. Re-mirror only that language, e.g. `npm run generate-sdk:<lang>` then",
		"       `npm run place-<lang>-tests` (node|java|python|ruby).",
		"    2. Run only that language's runner (cited below) and make it compile/lint/load cleanly",
		"       (live cases skip). Fix and repeat for that language only.",
		"  Once every affected language is clean, run `npm run generate-sdks` ONCE at the very end to",
		"  re-mirror everything consistently.",
		"",
		"  If you genuinely cannot satisfy an operation, leave a clear note in your final summary",
		"  explaining why rather than committing a broken or fabricated test.",
		"",
		"OPERATIONS NEEDING COVERAGE, BY LANGUAGE:",
		"",
		sections.join("\n\n"),
	].join("\n");
}

/**
 * Verify the API key authenticates and the requested model is actually
 * available to it before launching. A local run started with a model the key
 * can't use fails instantly with an opaque `status: ERROR` and an empty
 * conversation -- exactly the symptom we want to turn into a clear message.
 */
async function preflight(apiKey: string, model: string): Promise<void> {
	try {
		const me = await Cursor.me({ apiKey });
		console.error(`[author-tests] authenticated as "${me.apiKeyName}".`);

		const models = await Cursor.models.list({ apiKey });
		const available = models.some(
			(m) => m.id === model || (m.aliases?.includes(model) ?? false),
		);
		if (!available) {
			console.error(
				`[author-tests] model "${model}" is not available to this API key. ` +
					`Available: ${models.map((m) => m.id).join(", ") || "(none)"}. ` +
					"Pick one with --model, or grant the key access to this model.",
			);
			process.exit(1);
		}
		console.error(`[author-tests] model "${model}" is available.`);
	} catch (err) {
		if (err instanceof CursorAgentError) {
			console.error(
				`[author-tests] preflight failed (auth/network): ${err.message} (retryable=${err.isRetryable})`,
			);
			process.exit(1);
		}
		throw err;
	}
}

/** Surface streamed agent activity to stderr so CI logs show progress + errors. */
function logEvent(event: SDKMessage): void {
	switch (event.type) {
		case "assistant":
			for (const block of event.message.content) {
				if (block.type === "text" && block.text.trim()) {
					console.error(`[agent] ${block.text}`);
				}
			}
			break;
		case "tool_call":
			console.error(`[agent] tool_call: ${JSON.stringify(event)}`);
			break;
		case "status":
			console.error(
				`[agent] status: ${event.status}${event.message ? ` - ${event.message}` : ""}`,
			);
			break;
		default:
			break;
	}
}

async function main(): Promise<void> {
	const reportPath = path.resolve(arg("--report") ?? "test-coverage-report.json");
	const model = arg("--model") ?? "auto";
	const apiKey = process.env.CURSOR_API_KEY;

	// Hard cap on the run so a wedged loop fails fast instead of burning the CI
	// budget. Backstopped by the workflow step's own `timeout-minutes`.
	const timeoutMinutes = Number(process.env.AGENT_TIMEOUT_MINUTES ?? "20");
	const timeoutMs =
		Number.isFinite(timeoutMinutes) && timeoutMinutes > 0 ? timeoutMinutes * 60_000 : 0;

	const report = readReport(reportPath);
	if (!report.hasGaps) {
		console.error("[author-tests] no coverage gaps; nothing to do.");
		return;
	}

	// Offline escape hatch: print the exact prompt the agent would receive and
	// exit, so it can be pasted into a chat/agent manually without a Cursor API
	// key, network access, or the SDK. Diagnostics go to stderr; the prompt
	// itself goes to stdout so it can be piped/redirected cleanly.
	if (hasFlag("--print-prompt")) {
		printGapSummary(report);
		process.stdout.write(`${buildPrompt(report)}\n`);
		return;
	}

	if (!apiKey) {
		console.error("[author-tests] CURSOR_API_KEY is not set; cannot start the agent.");
		process.exit(1);
	}

	await preflight(apiKey, model);

	const prompt = buildPrompt(report);
	console.error(
		`[author-tests] ${report.gaps.length} operation(s) with gaps; launching agent (model=${model}).`,
	);

	try {
		// Use create + send (rather than the one-shot Agent.prompt) so we can
		// stream the agent's progress and, on failure, surface the transcript --
		// a bare `status: error` from Agent.prompt is undebuggable in CI.
		await using agent = await Agent.create({
			apiKey,
			model: { id: model },
			// Local runtime against this checkout; inline config only (no ambient
			// project/user/team settings) per SDK best practice for unattended runs.
			local: { cwd: REPO_ROOT, settingSources: [] },
		});

		const run = await agent.send(prompt);
		console.error(`[author-tests] run ${run.id} started (agent ${agent.agentId}); streaming...`);

		// Bound the run: on timeout, cancel it (best effort) so `wait()` returns
		// promptly, and remember we timed out so we can exit non-zero below.
		let timedOut = false;
		let timer: ReturnType<typeof setTimeout> | undefined;
		if (timeoutMs > 0) {
			timer = setTimeout(() => {
				timedOut = true;
				console.error(
					`[author-tests] run exceeded AGENT_TIMEOUT_MINUTES=${timeoutMinutes}; cancelling.`,
				);
				if (run.supports("cancel")) {
					run.cancel().catch((cancelErr) => {
						console.error(
							`[author-tests] cancel failed: ${cancelErr instanceof Error ? cancelErr.message : String(cancelErr)}`,
						);
					});
				}
			}, timeoutMs);
		}

		try {
			for await (const event of run.stream()) {
				logEvent(event);
			}
		} finally {
			if (timer) clearTimeout(timer);
		}

		if (timedOut) {
			console.error(
				`[author-tests] run timed out after ${timeoutMinutes} minute(s); treating as failure.`,
			);
			process.exit(2);
		}

		const result = await run.wait();
		console.error(
			`[author-tests] run ${result.id} finished with status: ${result.status}` +
				`${result.requestId ? ` (requestId=${result.requestId})` : ""}` +
				`${result.durationMs != null ? ` durationMs=${result.durationMs}` : ""}`,
		);
		if (result.result) console.error(result.result);

		if (result.status === "error") {
			// Run executed but failed mid-flight. Dump the full result first: on a
			// fast, empty-transcript failure (local executor crash on startup) the
			// real error lives in the result payload, not the conversation.
			console.error("[author-tests] run ended in error; full result object:");
			console.error(JSON.stringify(result, null, 2));
			console.error("[author-tests] dumping conversation transcript:");
			if (run.supports("conversation")) {
				try {
					console.error(JSON.stringify(await run.conversation(), null, 2));
				} catch (convErr) {
					console.error(
						`[author-tests] could not fetch conversation: ${convErr instanceof Error ? convErr.message : String(convErr)}`,
					);
				}
			}
			process.exit(2);
		}
	} catch (err) {
		if (err instanceof CursorAgentError) {
			// Run never started: auth/config/network.
			console.error(
				`[author-tests] agent failed to start: ${err.message} (retryable=${err.isRetryable})`,
			);
			process.exit(1);
		}
		throw err;
	}
}

main().catch((err) => {
	console.error(`[author-tests] ${err instanceof Error ? err.message : String(err)}`);
	process.exit(1);
});
