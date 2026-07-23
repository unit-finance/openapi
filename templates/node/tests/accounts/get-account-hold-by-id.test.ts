import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateAccountHoldRequest } from "../helpers/fixtures";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountHoldById", () => {
	// SKIPPED: depends on creating an account hold first, which is blocked by an
	// upstream unit-openapi spec bug (data.type "createAccountHoldJson" vs the
	// API's required "accountHold"). Re-enable once the spec is fixed.
	it.skip("returns an account hold by id", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const created = await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(shared.id),
		});
		expect(created.status).toBe(201);

		const { data, status } = await api.getAccountHoldById({
			id: created.data.data.id,
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(created.data.data.id);
		expect(data.data.type).toBe("accountHold");
		expect(data.data.attributes).toBeDefined();
	});
});
