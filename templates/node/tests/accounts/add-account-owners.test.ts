import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildAddAccountOwnersRequest } from "../helpers/fixtures";
import {
	createDedicatedDepositAccount,
	getOrCreateSharedIndividualCustomerId,
} from "../helpers/sharedAccount";

describeIfToken("AccountsApi.addAccountOwners", () => {
	// SKIPPED: blocked by an upstream unit-openapi spec bug — the generated body
	// nests as data.attributes.data, but the API expects a top-level JSON:API
	// array (data: [{ type: "customer", id }]). Re-enable once the spec is fixed.
	it.skip("adds an individual customer as a joint account owner", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();
		const individualCustomerId =
			await getOrCreateSharedIndividualCustomerId();

		const { data, status } = await api.addAccountOwners({
			accountId: account.id,
			addAccountOwnersRequest:
				buildAddAccountOwnersRequest(individualCustomerId),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
