import { buildAccountsApi, describeIfToken } from "../helpers/api";
import {
	buildCreateAccountHoldRequest,
	buildReleaseAccountHoldRequest,
} from "../helpers/fixtures";
import { createDedicatedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.releaseAccountHold", () => {
	it("creates a hold then releases it", async () => {
		const api = buildAccountsApi();
		const account = await createDedicatedDepositAccount();

		const created = await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(account.id),
		});
		expect(created.status).toBe(201);
		const holdId = created.data.data.id;

		const { data, status } = await api.releaseAccountHold({
			id: holdId,
			releaseAccountHoldRequest: buildReleaseAccountHoldRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(holdId);
		expect(data.data.type).toBe("accountHold");
		expect(data.data.attributes).toBeDefined();
	});
});
