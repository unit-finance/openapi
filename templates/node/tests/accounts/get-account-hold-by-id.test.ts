import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateAccountHoldRequest } from "../helpers/fixtures";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountHoldById", () => {
	it("returns an account hold by id", async () => {
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
