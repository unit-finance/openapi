#!/usr/bin/env tsx
/**
 * check-sdk-version.ts
 *
 * Preflight guard for the per-language test runners. Every generated SDK
 * embeds the OpenAPI document version it was generated from in a stable core
 * file (e.g. the header comment of its `ApiClient`). `spec-version.json`
 * records the spec version the committed SDKs are supposed to track (bumped by
 * the regeneration workflow and by `fetch-spec`).
 *
 * If the two drift — typically because `spec-version.json` was bumped but the
 * SDK was never regenerated — the tests would run against a stale surface and
 * fail in confusing ways. This script fails fast instead, telling the caller to
 * regenerate the affected SDK.
 *
 * Usage: `tsx scripts/openapi/check-sdk-version.ts <node|java|python|ruby>`
 */
import fs from "node:fs";
import path from "node:path";
import { readSpecVersion } from "./spec-version";

const REPO_ROOT = process.cwd();

type Lang = "node" | "java" | "python" | "ruby";

/**
 * A generated, stable file per SDK that carries the
 * "The version of the OpenAPI document: <version>" marker. These are core
 * client files that are always emitted and are not rewritten by the
 * `prepare-*-sdk` steps (which only touch package manifests).
 */
const MARKER_FILES: Record<Lang, string> = {
	node: "sdks/node/base.ts",
	java: "sdks/java/src/main/java/com/unit/finance/sdk/ApiClient.java",
	python: "sdks/python/unit_finance_sdk/api_client.py",
	ruby: "sdks/ruby/lib/unit_openapi_ruby_sdk/api_client.rb",
};

const MARKER_RE = /version of the OpenAPI document:\s*(\S+)/i;

function fail(message: string): never {
	console.error(`\n\x1b[31m[check-sdk-version] ${message}\x1b[0m\n`);
	process.exit(1);
}

function main(): void {
	const lang = process.argv[2] as Lang | undefined;
	if (!lang || !(lang in MARKER_FILES)) {
		fail(
			`Usage: check-sdk-version.ts <node|java|python|ruby> (got: ${lang ?? "<none>"})`,
		);
	}

	const specVersion = readSpecVersion();
	const markerPath = path.join(REPO_ROOT, MARKER_FILES[lang]);

	if (!fs.existsSync(markerPath)) {
		fail(
			`The ${lang} SDK is not generated (missing ${MARKER_FILES[lang]}).\n` +
				`Run \`npm run generate-sdk:${lang}\` (or \`npm run generate-sdks\`) first.`,
		);
	}

	const contents = fs.readFileSync(markerPath, "utf8");
	const match = contents.match(MARKER_RE);
	if (!match) {
		fail(
			`Could not read the OpenAPI document version from ${MARKER_FILES[lang]}.\n` +
				`Expected a "version of the OpenAPI document: <version>" marker.`,
		);
	}

	const sdkVersion = match[1].replace(/^v/, "");
	if (sdkVersion !== specVersion) {
		fail(
			`${lang} SDK is out of date: it was generated from OpenAPI spec ` +
				`${sdkVersion}, but spec-version.json pins ${specVersion}.\n` +
				`Regenerate it before running the tests:\n` +
				`  npm run generate-sdk:${lang}\n` +
				`(or \`npm run generate-sdks\` to regenerate all languages).`,
		);
	}

	console.log(
		`[check-sdk-version] ${lang} SDK matches spec version ${specVersion}.`,
	);
}

main();
