#!/usr/bin/env tsx
/**
 * test-coverage-report.ts
 *
 * Reports which spec operations lack integration-test coverage in each
 * language's source-of-truth test tree under `templates/<lang>/`. Consumed by
 * the spec-regeneration workflow to decide whether to invoke the
 * test-authoring agent (`scripts/agents/author-tests.ts`), and runnable
 * standalone via `npm run test-coverage`.
 *
 * Why a heuristic rather than a path lookup: the operationId -> test-file
 * mapping is deliberately fuzzy and language-specific (e.g. the Java generator
 * renames `list` -> `callList`; node uses `check-registered-agent-address.test.ts`
 * while python uses `test_check_registered_agent_address.py`). So instead of
 * guessing filenames, we normalize each language's entire test tree (filenames
 * + contents: strip every non-alphanumeric char, lowercase) into one haystack
 * and check whether the normalized operationId appears in it. This makes all of
 * `createApplication`, `create_application`, and `create-application` collapse
 * to the same token, and a brand-new tag (which has no test files yet) yields a
 * miss for every one of its operations.
 *
 * Output: a JSON report (to `--out <file>`, default `test-coverage-report.json`)
 * plus a human summary on stderr. When `$GITHUB_OUTPUT` is set, also emits
 * `has_gaps` / `gap_count` step outputs. Always exits 0 (it is a report, not a
 * gate); the drift check and sandbox suites remain the actual gates.
 *
 * Usage: `tsx scripts/openapi/test-coverage-report.ts [--out <file>]`
 */

import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const SPEC_PATH = path.join(REPO_ROOT, "spec", "openapi.bundled.json");

type Lang = "node" | "java" | "python" | "ruby";

/** Source-of-truth test trees per language (outside the wiped sdks/ output). */
const LANG_TEST_DIRS: Record<Lang, { dir: string; exts: string[] }> = {
	node: { dir: "templates/node/tests", exts: [".ts"] },
	java: { dir: "templates/java/tests", exts: [".java"] },
	python: { dir: "templates/python/tests", exts: [".py"] },
	ruby: { dir: "templates/ruby/spec", exts: [".rb"] },
};

const LANGS = Object.keys(LANG_TEST_DIRS) as Lang[];

/** Directories never worth scanning even if they sneak into a test tree. */
const SKIP_DIRS = new Set(["node_modules", ".ruff_cache", "__pycache__"]);

interface SpecOperation {
	tag: string;
	operationId: string;
	method: string;
	path: string;
}

interface OperationCoverage extends SpecOperation {
	covered: Record<Lang, boolean>;
	missingLanguages: Lang[];
}

interface CoverageReport {
	generatedAt: string;
	specPath: string;
	totalOperations: number;
	languages: Lang[];
	operations: OperationCoverage[];
	gaps: OperationCoverage[];
	hasGaps: boolean;
}

/** Collapse a string to its bare alphanumeric, lowercased token. */
function normalize(s: string): string {
	return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function readSpec(): any {
	if (!fs.existsSync(SPEC_PATH)) {
		console.error(
			`[test-coverage] spec not found: ${path.relative(REPO_ROOT, SPEC_PATH)}. ` +
				"Run `npm run fetch-spec` first.",
		);
		process.exit(1);
	}
	return JSON.parse(fs.readFileSync(SPEC_PATH, "utf8"));
}

function enumerateOperations(spec: any): SpecOperation[] {
	const ops: SpecOperation[] = [];
	const paths = spec.paths ?? {};
	for (const p of Object.keys(paths)) {
		const item = paths[p];
		for (const method of Object.keys(item)) {
			const op = item[method];
			if (!op || typeof op !== "object" || !op.operationId) continue;
			const tag = Array.isArray(op.tags) && op.tags.length > 0 ? op.tags[0] : "default";
			ops.push({ tag, operationId: op.operationId, method, path: p });
		}
	}
	return ops;
}

/** Walk a directory, returning all file paths whose extension matches. */
function walkFiles(root: string, exts: string[]): string[] {
	if (!fs.existsSync(root)) return [];
	const out: string[] = [];
	for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
		if (entry.isDirectory()) {
			if (SKIP_DIRS.has(entry.name)) continue;
			out.push(...walkFiles(path.join(root, entry.name), exts));
		} else if (exts.some((e) => entry.name.endsWith(e))) {
			out.push(path.join(root, entry.name));
		}
	}
	return out;
}

/** Build the normalized filename+contents haystack for a language. */
function buildHaystack(lang: Lang): string {
	const { dir, exts } = LANG_TEST_DIRS[lang];
	const root = path.join(REPO_ROOT, dir);
	const files = walkFiles(root, exts);
	let blob = "";
	for (const f of files) {
		blob += path.basename(f);
		blob += fs.readFileSync(f, "utf8");
	}
	return normalize(blob);
}

function main(): void {
	const outArgIdx = process.argv.indexOf("--out");
	const outPath =
		outArgIdx !== -1 && process.argv[outArgIdx + 1]
			? process.argv[outArgIdx + 1]
			: path.join(REPO_ROOT, "test-coverage-report.json");

	const spec = readSpec();
	const operations = enumerateOperations(spec);
	const haystacks: Record<Lang, string> = {} as Record<Lang, string>;
	for (const lang of LANGS) haystacks[lang] = buildHaystack(lang);

	const covered: OperationCoverage[] = operations.map((op) => {
		const needle = normalize(op.operationId);
		const cov: Record<Lang, boolean> = {} as Record<Lang, boolean>;
		for (const lang of LANGS) cov[lang] = needle.length > 0 && haystacks[lang].includes(needle);
		const missingLanguages = LANGS.filter((l) => !cov[l]);
		return { ...op, covered: cov, missingLanguages };
	});

	const gaps = covered.filter((o) => o.missingLanguages.length > 0);
	const report: CoverageReport = {
		generatedAt: new Date().toISOString(),
		specPath: path.relative(REPO_ROOT, SPEC_PATH),
		totalOperations: operations.length,
		languages: LANGS,
		operations: covered,
		gaps,
		hasGaps: gaps.length > 0,
	};

	fs.writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

	// Human summary on stderr (stdout stays clean for piping if desired).
	console.error(
		`[test-coverage] ${operations.length} operation(s); ${gaps.length} with coverage gaps. ` +
			`Report: ${path.relative(REPO_ROOT, outPath)}`,
	);
	for (const g of gaps) {
		console.error(
			`  - ${g.tag} ${g.operationId} (${g.method.toUpperCase()} ${g.path}) ` +
				`missing: ${g.missingLanguages.join(", ")}`,
		);
	}

	if (process.env.GITHUB_OUTPUT) {
		fs.appendFileSync(
			process.env.GITHUB_OUTPUT,
			`has_gaps=${report.hasGaps}\ngap_count=${gaps.length}\n`,
		);
	}
}

main();
