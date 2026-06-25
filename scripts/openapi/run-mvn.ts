#!/usr/bin/env tsx
/**
 * Resolve a Maven executable and exec it with the forwarded arguments.
 *
 * Resolution order:
 *   1. $UNIT_MVN (explicit override, must point at an existing mvn binary)
 *   2. a previously vendored Maven under sdks/.maven/
 *   3. a `mvn` already on PATH
 *   4. download + extract a pinned Apache Maven into sdks/.maven/
 *
 * The vendored copy lives beside the generated SDK (which is wiped by
 * `generate-sdk:java`) rather than inside it, and is gitignored, so the
 * Java test target is self-contained and needs only a JDK on the host.
 */
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import https from "node:https";
import path from "node:path";

const MAVEN_VERSION = "3.9.9";
const REPO_ROOT = process.cwd();
const CACHE_DIR = path.join(REPO_ROOT, "sdks", ".maven");
const MAVEN_HOME = path.join(CACHE_DIR, `apache-maven-${MAVEN_VERSION}`);
const VENDORED_MVN = path.join(MAVEN_HOME, "bin", "mvn");
const DIST_BASE = `https://archive.apache.org/dist/maven/maven-3/${MAVEN_VERSION}/binaries`;
const TARBALL = `apache-maven-${MAVEN_VERSION}-bin.tar.gz`;

function isExecutable(file: string): boolean {
  try {
    fs.accessSync(file, fs.constants.X_OK);
    return true;
  } catch {
    return false;
  }
}

function systemMvnWorks(): boolean {
  const probe = spawnSync("mvn", ["-v"], { stdio: "ignore" });
  return probe.status === 0;
}

function download(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          resolve(download(new URL(res.headers.location, url).toString()));
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`GET ${url} -> HTTP ${res.statusCode}`));
          return;
        }
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

async function bootstrapMaven(): Promise<void> {
  console.log(`[run-mvn] No Maven found; downloading Apache Maven ${MAVEN_VERSION}...`);
  fs.mkdirSync(CACHE_DIR, { recursive: true });

  const tarUrl = `${DIST_BASE}/${TARBALL}`;
  const [archive, expectedSha] = await Promise.all([
    download(tarUrl),
    download(`${tarUrl}.sha512`).then((b) => b.toString("utf8").trim().split(/\s+/)[0]),
  ]);

  const actualSha = crypto.createHash("sha512").update(archive).digest("hex");
  if (actualSha !== expectedSha) {
    throw new Error(`Checksum mismatch for ${TARBALL}\n  expected ${expectedSha}\n  actual   ${actualSha}`);
  }

  const tmpTar = path.join(CACHE_DIR, TARBALL);
  fs.writeFileSync(tmpTar, archive);
  const extract = spawnSync("tar", ["-xzf", tmpTar, "-C", CACHE_DIR], { stdio: "inherit" });
  fs.rmSync(tmpTar, { force: true });
  if (extract.status !== 0) {
    throw new Error("Failed to extract the Maven distribution");
  }
  fs.chmodSync(VENDORED_MVN, 0o755);
  console.log(`[run-mvn] Maven ${MAVEN_VERSION} ready at ${path.relative(REPO_ROOT, MAVEN_HOME)}`);
}

async function resolveMvn(): Promise<string> {
  const override = process.env.UNIT_MVN;
  if (override && isExecutable(override)) return override;
  if (isExecutable(VENDORED_MVN)) return VENDORED_MVN;
  if (systemMvnWorks()) return "mvn";
  await bootstrapMaven();
  return VENDORED_MVN;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  // Keep the local repository inside the (gitignored) vendored dir so the
  // whole Java test target is self-contained and works even where $HOME/.m2
  // is not writable (e.g. sandboxes). Callers can still override by passing
  // their own -Dmaven.repo.local=...
  if (!args.some((a) => a.startsWith("-Dmaven.repo.local="))) {
    args.unshift(`-Dmaven.repo.local=${path.join(CACHE_DIR, "repository")}`);
  }

  const mvn = await resolveMvn();
  const result = spawnSync(mvn, args, { stdio: "inherit", env: process.env });
  if (result.error) {
    console.error(`[run-mvn] Failed to launch ${mvn}: ${result.error.message}`);
    process.exit(1);
  }
  process.exit(result.status ?? 1);
}

main().catch((err) => {
  console.error(`[run-mvn] ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});
