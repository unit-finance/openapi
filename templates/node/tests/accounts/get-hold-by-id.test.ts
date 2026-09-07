import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { createAccountHoldOrSkip } from "../helpers/holds";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.getAccountHoldById", () => {
	it("creates a hold then fetches it by id", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const created = await createAccountHoldOrSkip(api, account.id);
		if (!created) return;
		expect(created.status).toBe(201);
		const holdId = created.data.data.id;

		const { data, status } = await api.getAccountHoldById({ id: holdId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(holdId);
		expect(data.data.type).toBe("accountHold");
		expect(data.data.attributes).toBeDefined();
	});
});
