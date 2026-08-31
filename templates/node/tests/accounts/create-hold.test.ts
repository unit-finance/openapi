import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { createAccountHoldOrSkip } from "../helpers/holds";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.createAccountHold", () => {
	it("creates a hold on a dedicated deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const created = await createAccountHoldOrSkip(api, account.id);
		if (!created) return;
		const { data, status } = created;

		expect(status).toBe(201);
		expect(data.data.type).toBe("accountHold");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
