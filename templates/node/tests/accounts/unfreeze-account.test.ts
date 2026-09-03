import { buildAccountsApi, describeIfToken } from "../helpers/api";
import {
	buildCreateDepositAccountRequest,
	buildFreezeDepositAccountRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.unfreezeAccount", () => {
	it("unfreezes a frozen deposit account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const created = await api.createAccount({
			createAccountRequest: buildCreateDepositAccountRequest(ctx.customerId),
		});
		expect(created.status).toBe(201);
		const accountId = created.data.data.id;
		await api.freezeAccount({
			accountId,
			freezeAccountRequest: buildFreezeDepositAccountRequest(),
		});

		const { data, status } = await api.unfreezeAccount({ accountId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(accountId);
		expect(data.data.attributes.status).toBe("Open");
	});
});
