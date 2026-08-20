import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateDepositAccountRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.createAccount", () => {
	it("creates a deposit account for the shared customer", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.createAccount({
			createAccountRequest: buildCreateDepositAccountRequest(shared.customerId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("depositAccount");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
