import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildUpdateDepositAccountRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.updateAccount", () => {
	it("updates a deposit account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const { data, status } = await api.updateAccount({
			accountId: ctx.accountId,
			updateAccountRequest: buildUpdateDepositAccountRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(ctx.accountId);
		expect(data.data.type).toBe("depositAccount");
	});
});
