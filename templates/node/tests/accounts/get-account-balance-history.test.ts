import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountBalanceHistory", () => {
	it("lists end-of-day balances for an account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const { data, status } = await api.getAccountBalanceHistory({
			filterAccountId: ctx.accountId,
			pageLimit: "20",
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
	});
});
