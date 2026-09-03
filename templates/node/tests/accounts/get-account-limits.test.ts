import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountLimits", () => {
	it("returns account limits", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const { data, status } = await api.getAccountLimits({
			accountId: ctx.accountId,
		});

		expect(status).toBe(200);
		expect(data.data.type).toBe("limits");
		expect(data.data.attributes).toBeDefined();
	});
});
