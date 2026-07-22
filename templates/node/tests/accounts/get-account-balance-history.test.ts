import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountBalanceHistory", () => {
	it("returns end-of-day balances filtered by account id", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const { data, status } = await api.getAccountBalanceHistory({
			pageLimit: "20",
			filterAccountId: shared.id,
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const item of data.data) {
			expect(typeof item.type).toBe("string");
			expect(typeof item.id).toBe("string");
		}
	});
});
