import { buildAccountsApi, describeIfToken } from "../helpers/api";
import {
	buildAddAccountOwnersRequest,
	buildCreateDepositAccountRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.removeAccountOwners", () => {
	it("removes an owner from a deposit account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const created = await api.createAccount({
			createAccountRequest: buildCreateDepositAccountRequest(ctx.customerId),
		});
		expect(created.status).toBe(201);
		const accountId = created.data.data.id;
		await api.addAccountOwners({
			accountId,
			addAccountOwnersRequest: buildAddAccountOwnersRequest(
				ctx.individualCustomerId,
			),
		});

		const { data, status } = await api.removeAccountOwners({
			accountId,
			removeAccountOwnersRequest: buildAddAccountOwnersRequest(
				ctx.individualCustomerId,
			),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(accountId);
	});
});
