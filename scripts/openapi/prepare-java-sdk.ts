#!/usr/bin/env tsx
/**
 * prepare-java-sdk.ts
 *
 * Runs after `generate-sdk:java` (which wipes and rewrites
 * `sdks/java/` from the spec). The Java generator can only carry
 * the dependencies/config it knows about, so anything extra we need (e.g. the
 * dotenv-java library used by the integration suite) cannot be expressed via
 * `config.json`. This step overlays a curated XML fragment of custom
 * `<dependency>` elements into the generated `pom.xml` — the Maven analogue of
 * how `prepare-node-sdk.ts` swaps in a curated `package.json`.
 *
 * The fragment lives at `templates/java/pom-dependencies.xml`
 * (outside the wiped output tree) and is injected immediately before the
 * project-level `</dependencies>`. The operation is idempotent (guarded by a
 * marker comment) and deterministic, so the committed pom matches what
 * regeneration produces and the CI drift gate stays green.
 *
 * Usage: `tsx scripts/openapi/prepare-java-sdk.ts`
 */

import fs from "node:fs";
import path from "node:path";
import { readSpecVersion } from "./spec-version";

const REPO_ROOT = process.cwd();
const SDK_DIR = path.join(REPO_ROOT, "sdks", "java");
const POM = path.join(SDK_DIR, "pom.xml");
const FRAGMENT = path.join(REPO_ROOT, "templates", "java", "pom-dependencies.xml");

/** Marks an already-overlaid pom so re-runs are no-ops. Must appear in the fragment. */
const MARKER = "Custom dependencies injected by scripts/openapi/prepare-java-sdk.ts";

/** The project-level `</dependencies>` is uniquely followed by `<properties>`. */
const ANCHOR = "    </dependencies>\n    <properties>";

function rel(p: string): string {
	return path.relative(REPO_ROOT, p);
}

function fail(msg: string): never {
	console.error(`prepare-java-sdk: ${msg}`);
	process.exit(1);
}

function main(): void {
	if (!fs.existsSync(POM)) {
		fail(`pom not found: ${rel(POM)}. Run \`npm run generate-sdk:java\` first.`);
	}
	if (!fs.existsSync(FRAGMENT)) {
		fail(`dependency fragment not found: ${rel(FRAGMENT)}`);
	}

	let pom = fs.readFileSync(POM, "utf8");

	// Stamp the pinned spec version onto the project's own <version> so the
	// published artifact tracks spec-version.json rather than the config's
	// hardcoded artifactVersion. Idempotent, so it also corrects a pom that was
	// already dependency-overlaid on a prior run.
	pom = stampVersion(pom);

	if (pom.includes(MARKER)) {
		fs.writeFileSync(POM, pom, "utf8");
		console.log(`pom already overlaid; stamped version only (${rel(POM)})`);
		return;
	}

	const fragment = fs.readFileSync(FRAGMENT, "utf8").replace(/\s+$/, "");
	if (!fragment.includes(MARKER)) {
		fail(`fragment ${rel(FRAGMENT)} is missing the idempotency marker comment`);
	}

	const idx = pom.indexOf(ANCHOR);
	if (idx === -1) {
		fail(
			"could not find the project-level </dependencies> anchor; the generator " +
				"output may have changed and the anchor needs updating.",
		);
	}

	const merged = `${pom.slice(0, idx)}${fragment}\n${pom.slice(idx)}`;
	fs.writeFileSync(POM, merged, "utf8");
	console.log(`Overlaid ${rel(FRAGMENT)} into ${rel(POM)}`);
}

/**
 * Replace the project-level `<version>` — the one immediately following the
 * project `<name>` — leaving dependency versions untouched.
 */
function stampVersion(pom: string): string {
	const version = readSpecVersion();
	let replaced = false;
	const out = pom.replace(
		/(<name>unit-java-sdk<\/name>\s*<version>)[^<]*(<\/version>)/,
		(_m, p1, p2) => {
			replaced = true;
			return `${p1}${version}${p2}`;
		},
	);
	if (!replaced) {
		fail(
			"could not find the project-level <version> after <name>unit-java-sdk</name>; " +
				"the generator output may have changed.",
		);
	}
	console.log(`Stamped ${rel(POM)}: <version>${version}</version>`);
	return out;
}

main();
