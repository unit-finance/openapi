import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountLimits", () => {
	it("returns limits for a deposit account", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const { data, status } = await api.getAccountLimits({
			accountId: shared.id,
		});

		expect(status).toBe(200);
		expect(data.data).toBeDefined();
		expect(data.data.attributes).toBeDefined();
	});
});
