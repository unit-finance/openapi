#!/usr/bin/env tsx
/**
 * spec-version.ts
 *
 * Single source of truth for the versions stamped onto the generated SDKs.
 *
 * `spec-version.json` holds three kinds of version:
 *   - `version`: the pinned `unit-openapi` spec release.
 *   - `globalSdkVersion`: the shared GitHub Release (vX.Y.Z) that triggers
 *     publishing. Regeneration raises it when the spec is newer.
 *   - `sdkVersions.<lang>`: each SDK's own package version. `prepare-<lang>-sdk`
 *     stamps it onto that SDK's manifest (package.json / pom.xml /
 *     pyproject.toml / version.rb) and it is the version published.
 */
import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const LOCK_PATH = path.join(REPO_ROOT, "spec-version.json");

export type SdkLanguage = "node" | "java" | "python" | "ruby";

interface SpecLock {
	repo: string;
	version: string;
	/** Shared GitHub Release version. Defaults to `version`. */
	globalSdkVersion?: string;
	/** Per-language published package versions. */
	sdkVersions?: Partial<Record<SdkLanguage, string>>;
	assetName: string;
	/** API slices (tags) present in the spec; maintained by `fetch-spec`. */
	slices?: string[];
}

/** Reads and validates `spec-version.json`, returning the parsed lock. */
export function readSpecLock(): SpecLock {
	if (!fs.existsSync(LOCK_PATH)) {
		throw new Error(
			`spec-version.json not found at ${path.relative(REPO_ROOT, LOCK_PATH)}`,
		);
	}
	const lock = JSON.parse(fs.readFileSync(LOCK_PATH, "utf8")) as SpecLock;
	if (!lock.repo || !lock.version || !lock.assetName) {
		throw new Error("spec-version.json must set repo, version, assetName");
	}
	return lock;
}

function bareSemver(raw: string, field: string): string {
	const version = raw.replace(/^v/, "");
	if (!/^\d+\.\d+\.\d+/.test(version)) {
		throw new Error(
			`spec-version.json ${field} "${version}" is not a valid semver string`,
		);
	}
	return version;
}

/**
 * Pinned unit-openapi spec version (`version`). Used to fetch the spec and
 * to check that generated clients match that document.
 */
export function readSpecVersion(): string {
	return bareSemver(readSpecLock().version, "version");
}

/**
 * Shared GitHub Release version. `globalSdkVersion` when set, otherwise the
 * spec pin.
 */
export function readGlobalSdkVersion(): string {
	const lock = readSpecLock();
	return bareSemver(lock.globalSdkVersion ?? lock.version, "globalSdkVersion");
}

/** Package version stamped onto and published for one language's SDK. */
export function readPackageVersion(lang: SdkLanguage): string {
	const raw = readSpecLock().sdkVersions?.[lang];
	if (!raw) {
		throw new Error(`spec-version.json must set sdkVersions.${lang}`);
	}
	return bareSemver(raw, `sdkVersions.${lang}`);
}
