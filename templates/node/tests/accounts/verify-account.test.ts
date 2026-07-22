import { buildAccountsApi, describeIfToken } from "../helpers/api";
import { buildVerifyAccountRequest } from "../helpers/fixtures";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("AccountsApi.verifyAccount", () => {
	it("verifies a routing and account number pair", async () => {
		const api = buildAccountsApi();
		const shared = await getOrCreateSharedDepositAccount();

		const { data, status } = await api.verifyAccount({
			verifyAccountRequest: buildVerifyAccountRequest(
				shared.routingNumber,
				shared.accountNumber,
			),
		});

		expect(status).toBe(200);
		expect(typeof data.data.exists).toBe("boolean");
	});
});
