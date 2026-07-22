import type {
	BusinessApplication,
	DepositAccount,
	IndividualApplication,
	ResourceIdentifier,
} from "../..";
import { buildAccountsApi, buildApplicationsApi } from "./api";
import {
	buildBusinessApplicationRequest,
	buildCreateDepositAccountRequest,
	buildIndividualApplicationRequest,
} from "./fixtures";

export interface SharedAccount {
	id: string;
	type: "depositAccount";
	customerId: string;
	routingNumber: string;
	accountNumber: string;
}

let cachedAccount: Promise<SharedAccount> | null = null;
let cachedIndividualCustomerId: Promise<string> | null = null;

function relationshipId(
	data: ResourceIdentifier | ResourceIdentifier[] | undefined,
): string | undefined {
	if (!data) return undefined;
	if (Array.isArray(data)) return data[0]?.id;
	return data.id;
}

async function customerIdFromBusinessApplication(
	applicationId: string,
): Promise<string> {
	const appsApi = buildApplicationsApi();
	const { data, status } = await appsApi.getById({ id: applicationId });
	if (status !== 200) {
		throw new Error(
			`Failed to fetch business application ${applicationId}: expected status 200, got ${status}.`,
		);
	}
	const app = data.data as BusinessApplication;
	const customerId = relationshipId(app.relationships?.customer?.data);
	if (!customerId) {
		throw new Error(
			`Business application ${applicationId} is missing a customer relationship.`,
		);
	}
	return customerId;
}

async function customerIdFromIndividualApplication(
	applicationId: string,
): Promise<string> {
	const appsApi = buildApplicationsApi();
	const { data, status } = await appsApi.getById({ id: applicationId });
	if (status !== 200) {
		throw new Error(
			`Failed to fetch individual application ${applicationId}: expected status 200, got ${status}.`,
		);
	}
	const app = data.data as IndividualApplication;
	const customerId = relationshipId(app.relationships?.customer?.data);
	if (!customerId) {
		throw new Error(
			`Individual application ${applicationId} is missing a customer relationship.`,
		);
	}
	return customerId;
}

/**
 * Lazily creates one deposit account (backed by an auto-approved business
 * application) that downstream account/fee tests reuse.
 */
export function getOrCreateSharedDepositAccount(): Promise<SharedAccount> {
	if (cachedAccount) return cachedAccount;
	cachedAccount = (async () => {
		const appsApi = buildApplicationsApi();
		const accountsApi = buildAccountsApi();

		const created = await appsApi.createApplication({
			createApplicationRequest: buildBusinessApplicationRequest(),
		});
		if (created.status !== 201) {
			throw new Error(
				`Failed to create business application for shared account: expected status 201, got ${created.status}.`,
			);
		}

		const customerId = await customerIdFromBusinessApplication(
			created.data.data.id,
		);
		const accountRes = await accountsApi.createAccount({
			createAccountRequest: buildCreateDepositAccountRequest(customerId),
		});
		if (accountRes.status !== 201) {
			throw new Error(
				`Failed to create shared deposit account: expected status 201, got ${accountRes.status}.`,
			);
		}

		const account = accountRes.data.data as DepositAccount;
		return {
			id: account.id,
			type: "depositAccount",
			customerId,
			routingNumber: account.attributes.routingNumber,
			accountNumber: account.attributes.accountNumber,
		};
	})();
	return cachedAccount;
}

/** Create a dedicated deposit account (not cached) for destructive flows. */
export async function createDedicatedDepositAccount(): Promise<SharedAccount> {
	const appsApi = buildApplicationsApi();
	const accountsApi = buildAccountsApi();

	const created = await appsApi.createApplication({
		createApplicationRequest: buildBusinessApplicationRequest(),
	});
	if (created.status !== 201) {
		throw new Error(
			`Failed to create business application: expected status 201, got ${created.status}.`,
		);
	}

	const customerId = await customerIdFromBusinessApplication(
		created.data.data.id,
	);
	const accountRes = await accountsApi.createAccount({
		createAccountRequest: buildCreateDepositAccountRequest(customerId),
	});
	if (accountRes.status !== 201) {
		throw new Error(
			`Failed to create deposit account: expected status 201, got ${accountRes.status}.`,
		);
	}

	const account = accountRes.data.data as DepositAccount;
	return {
		id: account.id,
		type: "depositAccount",
		customerId,
		routingNumber: account.attributes.routingNumber,
		accountNumber: account.attributes.accountNumber,
	};
}

/**
 * Lazily creates one auto-approved individual customer for joint-account
 * owner add/remove tests.
 */
export function getOrCreateSharedIndividualCustomerId(): Promise<string> {
	if (cachedIndividualCustomerId) return cachedIndividualCustomerId;
	cachedIndividualCustomerId = (async () => {
		const appsApi = buildApplicationsApi();
		const created = await appsApi.createApplication({
			createApplicationRequest: buildIndividualApplicationRequest(),
		});
		if (created.status !== 201) {
			throw new Error(
				`Failed to create individual application: expected status 201, got ${created.status}.`,
			);
		}
		return customerIdFromIndividualApplication(created.data.data.id);
	})();
	return cachedIndividualCustomerId;
}
