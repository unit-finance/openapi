import {
	AccountsApi,
	ApplicationDocumentsApi,
	ApplicationsApi,
	AuthorizedUsersApi,
	CardFraudOutreachApi,
	CardHolderAPITokensApi,
	CardsAddToMobileWalletApi,
	CardsApi,
	CardsATMLocationsApi,
	CardsAuthorizationRequestsApi,
	CardsAuthorizationsApi,
	CheckDepositsApi,
	CheckPaymentsApi,
	Configuration,
	CounterpartiesApi,
	CreditApplicationsApi,
	CreditDecisionsApi,
	CustomersApi,
	DACAApi,
	DisputesApi,
	FeesApi,
	InstitutionsApi,
	InterestApi,
	LendingProgramsApi,
	PaymentsApi,
	PositivePayApi,
	ReceivablesManagementApi,
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

export function buildCheckPaymentsApi(): CheckPaymentsApi {
	return new CheckPaymentsApi(configuration());
}

export function buildCounterpartiesApi(): CounterpartiesApi {
	return new CounterpartiesApi(configuration());
}

export function buildApplicationDocumentsApi(): ApplicationDocumentsApi {
	return new ApplicationDocumentsApi(configuration());
}

export function buildAuthorizedUsersApi(): AuthorizedUsersApi {
	return new AuthorizedUsersApi(configuration());
}

export function buildCardFraudOutreachApi(): CardFraudOutreachApi {
	return new CardFraudOutreachApi(configuration());
}

export function buildCardHolderApiTokensApi(): CardHolderAPITokensApi {
	return new CardHolderAPITokensApi(configuration());
}

export function buildCardsAtmLocationsApi(): CardsATMLocationsApi {
	return new CardsATMLocationsApi(configuration());
}

export function buildCardsAddToMobileWalletApi(): CardsAddToMobileWalletApi {
	return new CardsAddToMobileWalletApi(configuration());
}

export function buildCardsAuthorizationRequestsApi(): CardsAuthorizationRequestsApi {
	return new CardsAuthorizationRequestsApi(configuration());
}

export function buildCardsAuthorizationsApi(): CardsAuthorizationsApi {
	return new CardsAuthorizationsApi(configuration());
}

export function buildDacaApi(): DACAApi {
	return new DACAApi(configuration());
}

export function buildDisputesApi(): DisputesApi {
	return new DisputesApi(configuration());
}

export function buildInstitutionsApi(): InstitutionsApi {
	return new InstitutionsApi(configuration());
}

export function buildInterestApi(): InterestApi {
	return new InterestApi(configuration());
}

export function buildLendingProgramsApi(): LendingProgramsApi {
	return new LendingProgramsApi(configuration());
}

export function buildPositivePayApi(): PositivePayApi {
	return new PositivePayApi(configuration());
}

export function buildReceivablesManagementApi(): ReceivablesManagementApi {
	return new ReceivablesManagementApi(configuration());
}

/**
 * `GET /credit-applications/{id}` and `GET /credit-decisions/{id}` reject any
 * request that omits a `Content-Type: application/vnd.api+json` header with
 * **415**, even though neither takes a body. The spec declares no request body
 * for them, so the generated clients send no `Content-Type` and every
 * single-resource read fails. Pinning the header in `baseOptions` works around
 * it for the credit clients only; the list endpoints accept it too.
 */
function creditConfiguration(): Configuration {
	const base = configuration();
	base.baseOptions = {
		...base.baseOptions,
		headers: {
			...base.baseOptions?.headers,
			"Content-Type": "application/vnd.api+json",
		},
	};
	return base;
}

export function buildCreditApplicationsApi(): CreditApplicationsApi {
	return new CreditApplicationsApi(creditConfiguration());
}

export function buildCreditDecisionsApi(): CreditDecisionsApi {
	return new CreditDecisionsApi(creditConfiguration());
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
