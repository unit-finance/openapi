import type { DepositAccount, IndividualApplication } from "../..";
import { buildAccountsApi, buildApi, sleep } from "./api";
import { buildCreateDepositAccountRequest, buildIndividualApplicationRequest } from "./fixtures";

/**
 * Creates an individual application in the sandbox and returns the id of the
 * customer it provisions. Used by owner tests, which require individual
 * customers (Unit forbids mixing a business owner with individual owners on the
 * same account).
 */
export async function createIndividualCustomerId(): Promise<string> {
	const appsApi = buildApi();
	const { data, status } = await appsApi.createApplication({
		createApplicationRequest: buildIndividualApplicationRequest(),
	});
	if (status !== 201) {
		throw new Error(
			`Failed to create individual application: expected status 201, got ${status}.`,
		);
	}
	const applicationId = data.data.id;
	for (let attempt = 0; attempt < 30; attempt++) {
		const { data: app } = await appsApi.getById({ id: applicationId });
		const customerRel = (app.data as IndividualApplication).relationships
			?.customer?.data;
		const customerId =
			customerRel && !Array.isArray(customerRel) ? customerRel.id : undefined;
		if (customerId) return customerId;
		await sleep(1000);
	}
	throw new Error(
		`Timed out waiting for customer on application ${applicationId}.`,
	);
}

/**
 * Provisions a fresh individual customer plus a deposit account owned solely by
 * that customer, so owner-mutation tests start from an all-individual account.
 */
export async function createIndividualDepositAccount(): Promise<DepositAccount> {
	const customerId = await createIndividualCustomerId();
	const api = buildAccountsApi();
	const { data, status } = await api.createAccount({
		createAccountRequest: buildCreateDepositAccountRequest(customerId),
	});
	if (status !== 201) {
		throw new Error(
			`Failed to create individual deposit account: expected status 201, got ${status}.`,
		);
	}
	return data.data as DepositAccount;
}
