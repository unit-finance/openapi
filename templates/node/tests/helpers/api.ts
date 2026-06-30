import axios from "axios";
import { ApplicationsApi, Configuration, FeesApi } from "../..";

export const TOKEN = process.env.UNIT_SANDBOX_TOKEN;
export const BASE_PATH =
	process.env.UNIT_SANDBOX_BASE_URL ?? "https://api.s.unit.sh";

/**
 * Construct an `ApplicationsApi` bound to the sandbox.
 *
 * Throws if the bearer token is missing — but every test file gates its
 * `describe` on `describeIfToken` so we never reach this branch when the
 * token is unset.
 */
function sandboxConfiguration(): Configuration {
	if (!TOKEN) {
		throw new Error(
			"UNIT_SANDBOX_TOKEN is required to talk to the sandbox; set it in .env or the shell.",
		);
	}
	return new Configuration({ accessToken: TOKEN, basePath: BASE_PATH });
}

export function buildApi(): ApplicationsApi {
	return new ApplicationsApi(sandboxConfiguration());
}

export function buildFeesApi(): FeesApi {
	return new FeesApi(sandboxConfiguration());
}

let cachedDepositAccountId: Promise<string> | null = null;

/**
 * Returns a deposit account id from the sandbox. The Fees API is not paired
 * with an accounts list operation in this spec slice, so setup uses a direct
 * GET /accounts call with the same bearer token.
 */
export function getSandboxDepositAccountId(): Promise<string> {
	if (cachedDepositAccountId) return cachedDepositAccountId;
	cachedDepositAccountId = (async () => {
		const response = await axios.get<{ data: Array<{ id: string }> }>(
			`${BASE_PATH}/accounts`,
			{
				params: { "page[limit]": 1 },
				headers: { Authorization: `Bearer ${TOKEN}` },
			},
		);
		const accountId = response.data.data?.[0]?.id;
		if (!accountId) {
			throw new Error("No deposit account found in sandbox.");
		}
		return accountId;
	})();
	return cachedDepositAccountId;
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
