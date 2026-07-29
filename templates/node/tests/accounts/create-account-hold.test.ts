import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateAccountHoldRequest } from "../helpers/fixtures";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.createAccountHold", () => {
	// SKIPPED: blocked by an upstream unit-openapi spec bug — the generated
	// request sets data.type = "createAccountHoldJson", but the API requires
	// "accountHold". Re-enable once the spec is fixed.
	it.skip("creates an account hold on a deposit account", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const { data, status } = await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(shared.id),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("accountHold");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.amount).toBeDefined();
		expect(data.data.attributes.description).toBeDefined();
	});
});
