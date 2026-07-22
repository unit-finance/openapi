import type { DepositAccount } from "../..";
import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccount", () => {
	it("returns the deposit account by id", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const { data, status } = await api.getAccount({ accountId: shared.id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(shared.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
		const account = data.data as DepositAccount;
		expect(account.attributes.routingNumber).toBeDefined();
		expect(account.attributes.accountNumber).toBeDefined();
	});
});
