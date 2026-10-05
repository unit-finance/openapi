import type { BusinessApplication, DepositAccount } from "../..";
import { buildAccountsApi, buildApi, sleep, withRetry } from "./api";
import {
	buildCreateDepositAccountRequest,
	buildDepositAccountRequestForCustomer,
} from "./fixtures";
import { getOrCreateSharedBusinessApp } from "./sharedApp";

export interface SharedAccount {
	accountId: string;
	counterpartyAccountId: string;
	customerId: string;
	routingNumber: string;
	accountNumber: string;
}

let cached: Promise<SharedAccount> | null = null;

async function waitForCustomerId(applicationId: string): Promise<string> {
	const api = buildApi();
	for (let attempt = 0; attempt < 30; attempt++) {
		const { data } = await api.getById({ id: applicationId });
		const customerRel = (data.data as BusinessApplication).relationships
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

async function createDepositAccount(customerId: string): Promise<DepositAccount> {
	const api = buildAccountsApi();
	// Retried for the same reason as the shared application: this is provisioning
	// every suite depends on, not the operation under test.
	const { data, status } = await withRetry(() =>
		api.createAccount({
			createAccountRequest: buildDepositAccountRequestForCustomer(customerId),
		}),
	);
	if (status !== 201) {
		throw new Error(
			`Failed to create deposit account: expected status 201, got ${status}.`,
		);
	}
	return data.data as DepositAccount;
}

/**
 * Lazily provisions a customer plus two deposit accounts that downstream
 * fees/accounts/payments suites reuse.
 */
export function getOrCreateSharedAccount(): Promise<SharedAccount> {
	if (cached) return cached;
	cached = (async () => {
		const sharedApp = await getOrCreateSharedBusinessApp();
		const customerId = await waitForCustomerId(sharedApp.id);
		const primary = await createDepositAccount(customerId);
		const counterparty = await createDepositAccount(customerId);
		return {
			accountId: primary.id,
			counterpartyAccountId: counterparty.id,
			customerId,
			routingNumber: primary.attributes.routingNumber,
			accountNumber: primary.attributes.accountNumber,
		};
	})();
	return cached;
}

/** Creates an isolated deposit account for tests that mutate account state. */
export async function createDedicatedDepositAccount(): Promise<DepositAccount> {
	const shared = await getOrCreateSharedAccount();
	const api = buildAccountsApi();
	const { data, status } = await api.createAccount({
		createAccountRequest: buildCreateDepositAccountRequest(shared.customerId),
	});
	if (status !== 201) {
		throw new Error(
			`Failed to create dedicated deposit account: expected status 201, got ${status}.`,
		);
	}
	return data.data as DepositAccount;
}
