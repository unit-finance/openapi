import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCloseDepositAccountRequest } from "../helpers/fixtures";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.closeAccount", () => {
	it("closes a dedicated deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const { data, status } = await api.closeAccount({
			accountId: account.id,
			closeAccountRequest: buildCloseDepositAccountRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
