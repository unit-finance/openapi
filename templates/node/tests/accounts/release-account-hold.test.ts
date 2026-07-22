import { buildAccountsApi, describeIfToken } from "../helpers/api";
import {
	buildCreateAccountHoldRequest,
	buildReleaseAccountHoldRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.releaseAccountHold", () => {
	it("releases an account hold", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const created = await api.createAccountHold({
			createAccountHoldRequest: buildCreateAccountHoldRequest(shared.id),
		});
		expect(created.status).toBe(201);

		const { data, status } = await api.releaseAccountHold({
			id: created.data.data.id,
			releaseAccountHoldRequest: buildReleaseAccountHoldRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(created.data.data.id);
		expect(data.data.type).toBe("accountHold");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.status).toBeDefined();
	});
});
