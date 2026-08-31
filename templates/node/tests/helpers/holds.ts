import { isAxiosError } from "axios";
import type { AccountsApi } from "../..";
import { buildCreateAccountHoldRequest } from "./fixtures";

/**
 * Create an account hold, or return `null` when the sandbox org's bank
 * agreement has `enableHoldOnAccounts` turned off. That flag is a property of
 * the org the token belongs to and cannot be toggled from the API, so every
 * hold-creating test has to treat it as feature-unavailable rather than fail.
 */
export async function createAccountHoldOrSkip(
	api: AccountsApi,
	accountId: string,
) {
	try {
		return await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(accountId),
		});
	} catch (err) {
		if (
			isAxiosError(err) &&
			err.response?.status === 400 &&
			JSON.stringify(err.response?.data ?? "").includes("enableHoldOnAccounts")
		) {
			console.warn(
				"Account holds are disabled on this sandbox org's bank agreement; skipping.",
			);
			return null;
		}
		throw err;
	}
}
