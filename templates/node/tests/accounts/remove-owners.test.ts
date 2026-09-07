import { buildAccountsApi, describeIfToken } from "../helpers/api";
import {
	buildAddAccountOwnersRequest,
	buildRemoveAccountOwnersRequest,
} from "../helpers/fixtures";
import {
	createIndividualCustomerId,
	createIndividualDepositAccount,
} from "../helpers/individualCustomer";

describeIfToken("AccountsApi.removeAccountOwners", () => {
	it("adds then removes an individual owner from an individual-owned deposit account", async () => {
		const api = buildAccountsApi();
		// Owners can only be added to an account whose existing owners are all
		// individuals — Unit rejects mixing a business owner with individuals.
		const account = await createIndividualDepositAccount();
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
