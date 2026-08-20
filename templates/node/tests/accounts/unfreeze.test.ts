import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildFreezeDepositAccountRequest } from "../helpers/fixtures";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.unfreezeAccount", () => {
	it("freezes then unfreezes a dedicated deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const frozen = await api.freezeAccount({
			accountId: account.id,
			freezeAccountRequest: buildFreezeDepositAccountRequest(),
		});
		expect([200, 201]).toContain(frozen.status);

		const { data, status } = await api.unfreezeAccount({
			accountId: account.id,
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(account.id);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
