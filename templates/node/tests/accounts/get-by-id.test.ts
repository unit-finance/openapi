import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccount", () => {
	it("returns the shared deposit account by id", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.getAccount({
			accountId: shared.accountId,
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(shared.accountId);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
