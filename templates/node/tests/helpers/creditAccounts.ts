import { buildAccountsApi } from "./api";
import { errorBody, isCapabilityError } from "./capabilities";
import { buildCreateCreditAccountRequest } from "./fixtures";
import { getOrCreateSharedAccount } from "./sharedAccount";

/**
 * `creditTerms` names a credit product configured on the org, and there is no
 * API to enumerate them. `credit_terms_1` is the identifier Unit's own docs
 * use for the sandbox default; an org without it answers the create with 4xx,
 * which the caller treats as feature-unavailable.
 */
const SANDBOX_CREDIT_TERMS = "credit_terms_1";

async function findExistingCreditAccountId(): Promise<string | null> {
	const { data } = await buildAccountsApi().listAccounts({ pageLimit: "100" });
	const accounts = Array.isArray(data.data)
		? (data.data as unknown as Array<Record<string, unknown>>)
		: [];
	for (const account of accounts) {
		if (account.type === "creditAccount" && typeof account.id === "string") {
			return account.id;
		}
	}
	return null;
}

let cached: Promise<string | null> | null = null;

/**
 * A credit account id for the repayment suites, or `null` when the sandbox org
 * has no credit product. Prefers an existing credit account over minting one so
 * repeated runs don't accumulate them; falls back to a create.
 */
export function getCreditAccountId(): Promise<string | null> {
	if (cached) return cached;
	cached = (async () => {
		const existing = await findExistingCreditAccountId();
		if (existing) return existing;

		const { customerId } = await getOrCreateSharedAccount();
		try {
			const { data } = await buildAccountsApi().createAccount({
				createAccountRequest: buildCreateCreditAccountRequest(
					customerId,
					SANDBOX_CREDIT_TERMS,
				) as never,
			});
			const id = data.data?.id;
			return typeof id === "string" ? id : null;
		} catch (err) {
			if (isCapabilityError(err)) {
				console.warn(
					`No credit product is configured on this sandbox org, so credit accounts cannot be created; skipping. ${errorBody(err)}`,
				);
				return null;
			}
			throw err;
		}
	})();
	return cached;
}
