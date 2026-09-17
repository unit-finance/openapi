#!/usr/bin/env tsx
/**
 * spec-version.ts
 *
 * Single source of truth for the version stamped onto every generated SDK.
 *
 * The committed SDKs track a pinned `unit-openapi` spec release (`version`)
 * and a shared published package version (`sdkVersion`) in `spec-version.json`.
 * `prepare-*-sdk` stamps `sdkVersion` onto package manifests (package.json /
 * pyproject.toml / version.rb / pom.xml) so every language ships the same
 * number. Regeneration bumps `version` (and `sdkVersion` when the spec is
 * newer); packaging-only releases bump `sdkVersion` alone.
 */
import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const LOCK_PATH = path.join(REPO_ROOT, "spec-version.json");

interface SpecLock {
	repo: string;
	version: string;
	/** Shared GitHub Release / package version. Defaults to `version`. */
	sdkVersion?: string;
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
 * Version stamped onto every SDK package and used for the GitHub Release.
 * `sdkVersion` when set, otherwise the spec pin.
 */
export function readPackageVersion(): string {
	const lock = readSpecLock();
	return bareSemver(lock.sdkVersion ?? lock.version, "sdkVersion");
}
