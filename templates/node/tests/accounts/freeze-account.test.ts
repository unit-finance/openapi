import { buildAccountsApi, describeIfToken } from "../helpers/api";
import {
	buildCreateDepositAccountRequest,
	buildFreezeDepositAccountRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.freezeAccount", () => {
	it("freezes a deposit account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const created = await api.createAccount({
			createAccountRequest: buildCreateDepositAccountRequest(ctx.customerId),
		});
		expect(created.status).toBe(201);
		const accountId = created.data.data.id;

		const { data, status } = await api.freezeAccount({
			accountId,
			freezeAccountRequest: buildFreezeDepositAccountRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(accountId);
		expect(data.data.attributes.status).toBe("Frozen");
	});
});
