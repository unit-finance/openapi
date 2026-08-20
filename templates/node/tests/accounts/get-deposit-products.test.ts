import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAvailableDepositProducts", () => {
	it("returns available deposit products for the shared account", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.getAvailableDepositProducts({
			accountId: shared.accountId,
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
	});
});
