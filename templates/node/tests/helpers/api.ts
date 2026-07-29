import {
	AccountsApi,
	ApplicationsApi,
	Configuration,
	FeesApi,
} from "../..";

export const TOKEN = process.env.UNIT_SANDBOX_TOKEN;
export const BASE_PATH =
	process.env.UNIT_SANDBOX_BASE_URL ?? "https://api.s.unit.sh";

function buildConfiguration(): Configuration {
	if (!TOKEN) {
		throw new Error(
			"UNIT_SANDBOX_TOKEN is required to talk to the sandbox; set it in .env or the shell.",
		);
	}
	return new Configuration({ accessToken: TOKEN, basePath: BASE_PATH });
}

/**
 * Construct an `ApplicationsApi` bound to the sandbox.
 *
 * Throws if the bearer token is missing — but every test file gates its
 * `describe` on `describeIfToken` so we never reach this branch when the
 * token is unset.
 */
export function buildApi(): ApplicationsApi {
	return buildApplicationsApi();
}

export function buildApplicationsApi(): ApplicationsApi {
	return new ApplicationsApi(buildConfiguration());
}

export function buildAccountsApi(): AccountsApi {
	return new AccountsApi(buildConfiguration());
}

export function buildFeesApi(): FeesApi {
	return new FeesApi(buildConfiguration());
}

/**
 * `describeIfToken("...", () => {...})` runs the suite only when a sandbox
 * token is present; otherwise the suite is reported as skipped and the
 * overall run still exits 0. This is the standard gate for every test
 * file in this directory.
 */
export const describeIfToken: typeof describe = TOKEN ? describe : describe.skip;

/** Stable id for this jest run; used in created applications' tags so they
 * can be filtered out of the sandbox later. */
export const TEST_RUN_ID = `sdk-node-${Date.now().toString(36)}-${Math.random()
	.toString(36)
	.slice(2, 8)}`;
