import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateDepositAccountRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.createAccount", () => {
	it("creates a deposit account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const { data, status } = await api.createAccount({
			createAccountRequest: buildCreateDepositAccountRequest(ctx.customerId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("depositAccount");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
