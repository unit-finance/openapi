#!/usr/bin/env tsx
/**
 * spec-version.ts
 *
 * Single source of truth for the version stamped onto every generated SDK.
 *
 * The committed SDKs track a pinned `unit-openapi` spec release recorded in
 * `spec-version.json`. That same version is what each SDK package is published
 * under, so the `prepare-*-sdk` steps read it from here and stamp it into the
 * generated package manifests (package.json / pyproject.toml / version.rb /
 * pom.xml). This keeps a single knob — `spec-version.json` — that the
 * regeneration workflow bumps, instead of four hand-maintained version fields
 * that silently drift (they were all stuck at 0.1.0 while the spec was 0.3.0).
 */
import fs from "node:fs";
import path from "node:path";

const REPO_ROOT = process.cwd();
const LOCK_PATH = path.join(REPO_ROOT, "spec-version.json");

interface SpecLock {
	repo: string;
	version: string;
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

/**
 * The version to stamp onto generated SDK packages. A plain semver string such
 * as "0.3.0" (the leading `v` used in release tags is intentionally excluded).
 */
export function readSpecVersion(): string {
	const version = readSpecLock().version.replace(/^v/, "");
	if (!/^\d+\.\d+\.\d+/.test(version)) {
		throw new Error(
			`spec-version.json version "${version}" is not a valid semver string`,
		);
	}
	return version;
}
