import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAvailableDepositProducts", () => {
	it("returns available deposit products for an account", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const { data, status } = await api.getAvailableDepositProducts({
			accountId: shared.id,
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		for (const item of data.data) {
			expect(typeof item.type).toBe("string");
			expect(item.attributes).toBeDefined();
		}
	});
});
