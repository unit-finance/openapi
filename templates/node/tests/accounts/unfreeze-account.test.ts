import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildFreezeDepositAccountRequest } from "../helpers/fixtures";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.unfreezeAccount", () => {
	it("unfreezes a frozen deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const frozen = await api.freezeAccount({
			accountId: account.id,
			freezeAccountRequest: buildFreezeDepositAccountRequest(),
		});
		expect(frozen.status).toBe(200);

		const { data, status } = await api.unfreezeAccount({
			accountId: account.id,
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
