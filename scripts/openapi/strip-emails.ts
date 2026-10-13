#!/usr/bin/env tsx
/**
 * strip-emails.ts
 *
 * Runs after every SDK has been generated and prepared, and removes contact
 * email metadata from the published package manifests so no SDK ships an
 * author/developer email. The generators cannot always be told to omit one:
 * leaving `developerEmail` out of the Java `config.json`, for instance, emits
 * the generator's `team@openapitools.org` default instead.
 *
 * Each manifest is optional (a single-language generation leaves the others
 * untouched). The rewrite is idempotent and deterministic, so the committed
 * SDKs match regeneration and the CI drift gate stays green.
 *
 * Usage: `tsx scripts/openapi/strip-emails.ts` (via `npm run strip-emails`).
 */

import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();

interface Target {
	file: string;
	strip: (src: string) => string;
}

const TARGETS: Target[] = [
	{
		file: path.join(REPO_ROOT, "sdks", "java", "pom.xml"),
		strip: (src) => src.replace(/\n[ \t]*<email>[^<]*<\/email>/g, ""),
	},
	{
		file: path.join(REPO_ROOT, "sdks", "ruby", "unit_openapi_ruby_sdk.gemspec"),
		strip: (src) => src.replace(/^[ \t]*s\.email\s*=.*\n/gm, ""),
	},
	{
		file: path.join(REPO_ROOT, "sdks", "node", "package.json"),
		strip: stripJsonEmails,
	},
	{
		file: path.join(REPO_ROOT, "sdks", "python", "pyproject.toml"),
		strip: (src) =>
			src
				.replace(/,\s*email\s*=\s*"[^"]*"/g, "")
				.replace(/\{\s*email\s*=\s*"[^"]*"\s*,\s*/g, "{ "),
	},
];

/** Remove `email` keys and `<address>` suffixes from npm person fields. */
function stripJsonEmails(src: string): string {
	const pkg = JSON.parse(src);
	const scrub = (person: unknown): unknown => {
		if (typeof person === "string") {
			return person.replace(/\s*<[^>]*>/, "");
		}
		if (person && typeof person === "object") {
			const { email: _email, ...rest } = person as Record<string, unknown>;
			return rest;
		}
		return person;
	};
	for (const key of ["author", "maintainers", "contributors"]) {
		if (pkg[key] === undefined) continue;
		pkg[key] = Array.isArray(pkg[key]) ? pkg[key].map(scrub) : scrub(pkg[key]);
	}
	if (pkg.bugs && typeof pkg.bugs === "object") {
		delete pkg.bugs.email;
	}
	const out = `${JSON.stringify(pkg, null, 2)}\n`;
	return out === `${JSON.stringify(JSON.parse(src), null, 2)}\n` ? src : out;
}

function main(): void {
	for (const { file, strip } of TARGETS) {
		if (!fs.existsSync(file)) continue;
		const src = fs.readFileSync(file, "utf8");
		const out = strip(src);
		if (out !== src) {
			fs.writeFileSync(file, out, "utf8");
			console.log(`Stripped email metadata from ${path.relative(REPO_ROOT, file)}`);
		}
	}
}

main();
