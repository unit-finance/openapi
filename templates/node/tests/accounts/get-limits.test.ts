import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountLimits", () => {
	it("returns limits for the shared deposit account", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.getAccountLimits({
			accountId: shared.accountId,
		});

		expect(status).toBe(200);
		expect(data.data).toBeDefined();
	});
});
