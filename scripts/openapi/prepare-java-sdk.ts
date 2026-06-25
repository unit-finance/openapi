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

	const pom = fs.readFileSync(POM, "utf8");
	if (pom.includes(MARKER)) {
		console.log(`pom already overlaid; nothing to do (${rel(POM)})`);
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

main();
