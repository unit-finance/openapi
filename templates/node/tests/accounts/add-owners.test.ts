import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildAddAccountOwnersRequest } from "../helpers/fixtures";
import {
	createIndividualCustomerId,
	createIndividualDepositAccount,
} from "../helpers/individualCustomer";

describeIfToken("AccountsApi.addAccountOwners", () => {
	it("adds an individual customer as owner of an individual-owned deposit account", async () => {
		const api = buildAccountsApi();
		// Owners can only be added to an account whose existing owners are all
		// individuals — Unit rejects mixing a business owner with individuals.
		const account = await createIndividualDepositAccount();
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
