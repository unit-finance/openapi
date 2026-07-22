import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildUpdateDepositAccountRequest } from "../helpers/fixtures";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.updateAccount", () => {
	it("PATCHes the shared deposit account", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const { data, status } = await api.updateAccount({
			accountId: shared.id,
			updateAccountRequest: buildUpdateDepositAccountRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(shared.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
