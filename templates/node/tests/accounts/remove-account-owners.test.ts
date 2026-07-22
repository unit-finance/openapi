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
	it("removes an individual customer from a joint deposit account", async () => {
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
