import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAvailableDepositProducts", () => {
	it("returns available deposit products for an account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const { data, status } = await api.getAvailableDepositProducts({
			accountId: ctx.accountId,
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
	});
});
