import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountBalanceHistory", () => {
	it("returns balance history for the shared deposit account", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.getAccountBalanceHistory({
			filterAccountId: shared.accountId,
			pageLimit: "20",
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
	});
});
