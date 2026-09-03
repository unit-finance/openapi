import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccount", () => {
	it("returns the account by id", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const { data, status } = await api.getAccount({ accountId: ctx.accountId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(ctx.accountId);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
