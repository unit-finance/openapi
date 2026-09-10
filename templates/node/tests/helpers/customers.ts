import type { BusinessCustomer } from "../..";
import { buildCustomersApi } from "./api";
import { getOrCreateSharedAccount } from "./sharedAccount";

/**
 * The shared business application auto-approves in the sandbox, provisioning a
 * business customer that `getCustomer`, `updateCustomer` and the officer-update
 * suite reuse. Its id is exposed via the shared account helper.
 */
export async function getSharedBusinessCustomerId(): Promise<string> {
	const shared = await getOrCreateSharedAccount();
	return shared.customerId;
}

/** Reads the officer resource id off the shared business customer. */
export async function getSharedBusinessCustomerOfficerId(): Promise<{
	customerId: string;
	officerId: string;
}> {
	const customerId = await getSharedBusinessCustomerId();
	const api = buildCustomersApi();
	const { data } = await api.getCustomer({ customerId });
	const officerRel = (data.data as BusinessCustomer).relationships?.officer
		?.data;
	const officerId =
		officerRel && !Array.isArray(officerRel) ? officerRel.id : undefined;
	if (!officerId) {
		throw new Error(
			`No officer relationship on business customer ${customerId}.`,
		);
	}
	return { customerId, officerId };
}
