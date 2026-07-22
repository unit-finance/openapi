import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildAddAccountOwnersRequest } from "../helpers/fixtures";
import {
	createDedicatedDepositAccount,
	getOrCreateSharedIndividualCustomerId,
} from "../helpers/sharedAccount";

describeIfToken("AccountsApi.addAccountOwners", () => {
	it("adds an individual customer as a joint account owner", async () => {
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
