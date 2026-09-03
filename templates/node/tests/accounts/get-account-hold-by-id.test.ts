import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateAccountHoldRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountHoldById", () => {
	it("returns an account hold by id", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const created = await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(ctx.accountId),
		});
		expect(created.status).toBe(201);
		const holdId = created.data.data.id;

		const { data, status } = await api.getAccountHoldById({ id: holdId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(holdId);
		expect(data.data.type).toBe("accountHold");
	});
});
