import { buildDacaApi } from "./api";
import { buildUpdateDacaPoliciesRequest } from "./fixtures";
import { createDedicatedDepositAccount } from "./sharedAccount";

export type DacaState = "none" | "entered" | "activated";

/**
 * A dedicated deposit account already advanced through the DACA transitions
 * that must precede the one under test. `activate` requires the account to be
 * `Entered` and `deactivate` requires it to be `Activated`; otherwise the API
 * rejects the call with 400 `invalid_daca_status_transition`. Each suite takes
 * its own account so the transitions never depend on file execution order.
 */
export async function createAccountInDacaState(
	state: DacaState,
): Promise<string> {
	const account = await createDedicatedDepositAccount();
	if (state === "none") return account.id;

	const api = buildDacaApi();
	await api.enterControlAgreement({
		accountId: account.id,
		body: buildUpdateDacaPoliciesRequest(account.id),
	});
	if (state === "entered") return account.id;

	await api.activateControlAgreement({
		accountId: account.id,
		body: buildUpdateDacaPoliciesRequest(account.id),
	});
	return account.id;
}
