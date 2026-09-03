import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateAccountHoldRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.createAccountHold", () => {
	it("creates an account hold", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const { data, status } = await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(ctx.accountId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("accountHold");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
