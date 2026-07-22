import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCloseDepositAccountRequest } from "../helpers/fixtures";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.reopenAccount", () => {
	it("reopens a closed deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const closed = await api.closeAccount({
			accountId: account.id,
			closeAccountRequest: buildCloseDepositAccountRequest(),
		});
		expect(closed.status).toBe(200);

		const { data, status } = await api.reopenAccount({
			accountId: account.id,
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
