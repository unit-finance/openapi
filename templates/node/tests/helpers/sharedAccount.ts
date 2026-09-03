import type { BusinessApplication } from "../..";
import {
	buildAccountsApi,
	buildApplicationsApi,
	buildPaymentsApi,
} from "./api";
import {
	buildAchCreditPaymentRequest,
	buildCreateDepositAccountRequest,
	buildIndividualApplicationRequest,
} from "./fixtures";
import { getOrCreateSharedBusinessApp } from "./sharedApp";

export interface SharedAccountContext {
	customerId: string;
	accountId: string;
	secondaryAccountId: string;
	individualCustomerId: string;
}

let cached: Promise<SharedAccountContext> | null = null;

async function customerIdFromApplication(applicationId: string): Promise<string> {
	const appsApi = buildApplicationsApi();
	const { data, status } = await appsApi.getById({ id: applicationId });
	if (status !== 200) {
		throw new Error(`Failed to load application ${applicationId}: status ${status}`);
	}
	const app = data.data as BusinessApplication;
	const customerData = app.relationships?.customer?.data;
	const customerId =
		customerData && !Array.isArray(customerData) ? customerData.id : undefined;
	if (!customerId) {
		throw new Error(
			`Application ${applicationId} has no customer relationship yet (status=${app.attributes?.status}).`,
		);
	}
	return customerId;
}

async function createDepositAccount(customerId: string): Promise<string> {
	const accountsApi = buildAccountsApi();
	const { data, status } = await accountsApi.createAccount({
		createAccountRequest: buildCreateDepositAccountRequest(customerId),
	});
	if (status !== 201) {
		throw new Error(`Failed to create deposit account: status ${status}`);
	}
	return data.data.id;
}

async function fundAccount(accountId: string): Promise<void> {
	const paymentsApi = buildPaymentsApi();
	const { status } = await paymentsApi.createPayment({
		createPaymentRequest: buildAchCreditPaymentRequest(accountId),
	});
	if (status !== 201) {
		throw new Error(`Failed to fund account ${accountId}: status ${status}`);
	}
}

async function individualCustomerId(): Promise<string> {
	const appsApi = buildApplicationsApi();
	const { data, status } = await appsApi.createApplication({
		createApplicationRequest: buildIndividualApplicationRequest(),
	});
	if (status !== 201) {
		throw new Error(`Failed to create individual application: status ${status}`);
	}
	return customerIdFromApplication(data.data.id);
}

/**
 * Lazily provisions a funded deposit account (plus a secondary account and an
 * individual customer) that fees/accounts/payments suites reuse.
 */
export function getOrCreateSharedAccountContext(): Promise<SharedAccountContext> {
	if (cached) return cached;
	cached = (async () => {
		const sharedApp = await getOrCreateSharedBusinessApp();
		const customerId = await customerIdFromApplication(sharedApp.id);
		const accountId = await createDepositAccount(customerId);
		await fundAccount(accountId);
		const secondaryAccountId = await createDepositAccount(customerId);
		const indCustomerId = await individualCustomerId();
		return {
			customerId,
			accountId,
			secondaryAccountId,
			individualCustomerId: indCustomerId,
		};
	})();
	return cached;
}
