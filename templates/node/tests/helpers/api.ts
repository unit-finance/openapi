import {
	AccountsApi,
	ApplicationsApi,
	Configuration,
	FeesApi,
	PaymentsApi,
} from "../..";

export const TOKEN = process.env.UNIT_SANDBOX_TOKEN;
export const BASE_PATH =
	process.env.UNIT_SANDBOX_BASE_URL ?? "https://api.s.unit.sh";

function configuration(): Configuration {
	if (!TOKEN) {
		throw new Error(
			"UNIT_SANDBOX_TOKEN is required to talk to the sandbox; set it in .env or the shell.",
		);
	}
	return new Configuration({ accessToken: TOKEN, basePath: BASE_PATH });
}

export function buildApplicationsApi(): ApplicationsApi {
	return new ApplicationsApi(configuration());
}

export function buildAccountsApi(): AccountsApi {
	return new AccountsApi(configuration());
}

export function buildFeesApi(): FeesApi {
	return new FeesApi(configuration());
}

export function buildPaymentsApi(): PaymentsApi {
	return new PaymentsApi(configuration());
}

/** Back-compat alias used by the applications suites. */
export function buildApi(): ApplicationsApi {
	return buildApplicationsApi();
}

export const describeIfToken: typeof describe = TOKEN ? describe : describe.skip;

export const TEST_RUN_ID = `sdk-node-${Date.now().toString(36)}-${Math.random()
	.toString(36)
	.slice(2, 8)}`;
