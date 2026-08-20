import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildUpdateDepositAccountRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.updateAccount", () => {
	it("PATCHes the shared deposit account tags", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.updateAccount({
			accountId: shared.accountId,
			updateAccountRequest: buildUpdateDepositAccountRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(shared.accountId);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
