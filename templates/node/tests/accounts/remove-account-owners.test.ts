import { buildAccountsApi, describeIfToken } from "../helpers/api";
import {
	buildAddAccountOwnersRequest,
	buildRemoveAccountOwnersRequest,
} from "../helpers/fixtures";
import {
	createDedicatedDepositAccount,
	getOrCreateSharedIndividualCustomerId,
} from "../helpers/sharedAccount";

describeIfToken("AccountsApi.removeAccountOwners", () => {
	// SKIPPED: blocked by an upstream unit-openapi spec bug — the generated body
	// nests as data.attributes.data, but the API expects a top-level JSON:API
	// array (data: [{ type: "customer", id }]). Re-enable once the spec is fixed.
	it.skip("removes an individual customer from a joint deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();
		const individualCustomerId =
			await getOrCreateSharedIndividualCustomerId();

		const added = await api.addAccountOwners({
			accountId: account.id,
			addAccountOwnersRequest:
				buildAddAccountOwnersRequest(individualCustomerId),
		});
		expect(added.status).toBe(200);

		const { data, status } = await api.removeAccountOwners({
			accountId: account.id,
			removeAccountOwnersRequest: buildRemoveAccountOwnersRequest(
				individualCustomerId,
			),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
