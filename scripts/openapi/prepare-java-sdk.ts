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
import { readPackageVersion } from "./spec-version";

const REPO_ROOT = process.cwd();
const SDK_DIR = path.join(REPO_ROOT, "sdks", "java");
const POM = path.join(SDK_DIR, "pom.xml");

interface Overlay {
	fragment: string;
	/** Marks an already-overlaid pom so re-runs are no-ops. Must appear in the fragment. */
	marker: string;
	/** Fragment is inserted immediately before this unique string. */
	anchor: string;
}

const OVERLAYS: Overlay[] = [
	{
		fragment: path.join(REPO_ROOT, "templates", "java", "pom-dependencies.xml"),
		marker: "Custom dependencies injected by scripts/openapi/prepare-java-sdk.ts",
		// The project-level `</dependencies>` is uniquely followed by `<properties>`.
		anchor: "    </dependencies>\n    <properties>",
	},
	{
		fragment: path.join(REPO_ROOT, "templates", "java", "pom-publishing.xml"),
		marker: "Custom publishing plugins injected by scripts/openapi/prepare-java-sdk.ts",
		// End of the plugin list in the generator's `sign-artifacts` profile.
		anchor: "                </plugins>\n            </build>\n        </profile>",
	},
];

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

	let pom = fs.readFileSync(POM, "utf8");

	// Stamp the pinned spec version onto the project's own <version> so the
	// published artifact tracks spec-version.json rather than the config's
	// hardcoded artifactVersion. Idempotent, so it also corrects a pom that was
	// already overlaid on a prior run.
	pom = stampVersion(pom);

	for (const overlay of OVERLAYS) {
		pom = applyOverlay(pom, overlay);
	}
	fs.writeFileSync(POM, pom, "utf8");
}

function applyOverlay(pom: string, { fragment: file, marker, anchor }: Overlay): string {
	if (pom.includes(marker)) {
		console.log(`pom already contains ${rel(file)}; skipping`);
		return pom;
	}
	if (!fs.existsSync(file)) {
		fail(`fragment not found: ${rel(file)}`);
	}
	const fragment = fs.readFileSync(file, "utf8").replace(/\s+$/, "");
	if (!fragment.includes(marker)) {
		fail(`fragment ${rel(file)} is missing the idempotency marker comment`);
	}
	const idx = pom.indexOf(anchor);
	if (idx === -1 || pom.indexOf(anchor, idx + 1) !== -1) {
		fail(
			`could not find a unique anchor for ${rel(file)}; the generator ` +
				"output may have changed and the anchor needs updating.",
		);
	}
	console.log(`Overlaid ${rel(file)} into ${rel(POM)}`);
	return `${pom.slice(0, idx)}${fragment}\n${pom.slice(idx)}`;
}

/**
 * Replace the project-level `<version>` — the one immediately following the
 * project `<name>` — leaving dependency versions untouched.
 */
function stampVersion(pom: string): string {
	const version = readPackageVersion();
	let replaced = false;
	const out = pom.replace(
		/(<name>unit-openapi-java-sdk<\/name>\s*<version>)[^<]*(<\/version>)/,
		(_m, p1, p2) => {
			replaced = true;
			return `${p1}${version}${p2}`;
		},
	);
	if (!replaced) {
		fail(
			"could not find the project-level <version> after <name>unit-openapi-java-sdk</name>; " +
				"the generator output may have changed.",
		);
	}
	console.log(`Stamped ${rel(POM)}: <version>${version}</version>`);
	return out;
}

main();
