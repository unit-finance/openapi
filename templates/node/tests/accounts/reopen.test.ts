import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCloseDepositAccountRequest } from "../helpers/fixtures";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.reopenAccount", () => {
	it("closes then reopens a dedicated deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const closed = await api.closeAccount({
			accountId: account.id,
			closeAccountRequest: buildCloseDepositAccountRequest(),
		});
		expect([200, 201]).toContain(closed.status);

		const { data, status } = await api.reopenAccount({
			accountId: account.id,
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
