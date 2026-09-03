import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildCreateAccountHoldRequest, buildReleaseAccountHoldRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.releaseAccountHold", () => {
	it("releases an account hold", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const created = await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(ctx.accountId),
		});
		expect(created.status).toBe(201);
		const holdId = created.data.data.id;

		const { data, status } = await api.releaseAccountHold({
			id: holdId,
			releaseAccountHoldRequest: buildReleaseAccountHoldRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(holdId);
		expect(data.data.type).toBe("accountHold");
	});
});
