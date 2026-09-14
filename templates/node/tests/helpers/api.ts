import {
	AccountsApi,
	ApplicationsApi,
	CardsApi,
	CheckDepositsApi,
	Configuration,
	CustomersApi,
	FeesApi,
	PaymentsApi,
	TransactionsApi,
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

/** Construct an `ApplicationsApi` bound to the sandbox. */
export function buildApi(): ApplicationsApi {
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

export function buildCardsApi(): CardsApi {
	return new CardsApi(configuration());
}

export function buildTransactionsApi(): TransactionsApi {
	return new TransactionsApi(configuration());
}

export function buildCustomersApi(): CustomersApi {
	return new CustomersApi(configuration());
}

export function buildCheckDepositsApi(): CheckDepositsApi {
	return new CheckDepositsApi(configuration());
}

/**
 * `describeIfToken("...", () => {...})` runs the suite only when a sandbox
 * token is present; otherwise the suite is reported as skipped and the
 * overall run still exits 0. This is the standard gate for every test
 * file in this directory.
 */
export const describeIfToken: typeof describe = TOKEN ? describe : describe.skip;

/** Stable id for this jest run; used in created resources' tags so they
 * can be filtered out of the sandbox later. */
export const TEST_RUN_ID = `sdk-node-${Date.now().toString(36)}-${Math.random()
	.toString(36)
	.slice(2, 8)}`;

export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
