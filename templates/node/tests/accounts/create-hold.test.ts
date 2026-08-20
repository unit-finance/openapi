import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateAccountHoldRequest } from "../helpers/fixtures";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.createAccountHold", () => {
	it("creates a hold on a dedicated deposit account", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const { data, status } = await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(account.id),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("accountHold");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
