import { buildAccountsApi, describeIfToken } from "../helpers/api";
import {
	buildCloseDepositAccountRequest,
	buildCreateDepositAccountRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.reopenAccount", () => {
	it("reopens a closed deposit account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildAccountsApi();
		const created = await api.createAccount({
			createAccountRequest: buildCreateDepositAccountRequest(ctx.customerId),
		});
		expect(created.status).toBe(201);
		const accountId = created.data.data.id;
		await api.closeAccount({
			accountId,
			closeAccountRequest: buildCloseDepositAccountRequest(),
		});

		const { data, status } = await api.reopenAccount({ accountId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(accountId);
		expect(data.data.attributes.status).toBe("Open");
	});
});
