import type { IndividualApplication } from "../..";
import { buildApi, buildAccountsApi, describeIfToken, sleep } from "../helpers/api";
import {
	buildAddAccountOwnersRequest,
	buildIndividualApplicationRequest,
	buildRemoveAccountOwnersRequest,
} from "../helpers/fixtures";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

async function createIndividualCustomerId(): Promise<string> {
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

describeIfToken("AccountsApi.removeAccountOwners", () => {
	it("adds then removes an individual owner from a dedicated deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();
		const ownerCustomerId = await createIndividualCustomerId();

		const added = await api.addAccountOwners({
			accountId: account.id,
			addAccountOwnersRequest: buildAddAccountOwnersRequest([ownerCustomerId]),
		});
		expect([200, 201]).toContain(added.status);

		const { data, status } = await api.removeAccountOwners({
			accountId: account.id,
			removeAccountOwnersRequest:
				buildRemoveAccountOwnersRequest([ownerCustomerId]),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
