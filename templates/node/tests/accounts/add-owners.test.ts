import type { IndividualApplication } from "../..";
import { buildApi, buildAccountsApi, describeIfToken, sleep } from "../helpers/api";
import { buildAddAccountOwnersRequest, buildIndividualApplicationRequest } from "../helpers/fixtures";
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

describeIfToken("AccountsApi.addAccountOwners", () => {
	it("adds an individual customer as owner of a dedicated deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();
		const ownerCustomerId = await createIndividualCustomerId();

		const { data, status } = await api.addAccountOwners({
			accountId: account.id,
			addAccountOwnersRequest: buildAddAccountOwnersRequest([ownerCustomerId]),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
