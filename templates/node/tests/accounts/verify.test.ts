import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildVerifyAccountRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.verifyAccount", () => {
	it("verifies the shared deposit account routing and account numbers", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.verifyAccount({
			verifyAccountRequest: buildVerifyAccountRequest(
				shared.routingNumber,
				shared.accountNumber,
			),
		});

		expect(status).toBe(200);
		expect(data.data).toBeDefined();
	});
});
