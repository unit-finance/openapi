import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { buildCreateCheckDepositRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("CheckDepositsApi.createCheckDeposit", () => {
	it("creates a check deposit on the shared account", async () => {
		const api = buildCheckDepositsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.createCheckDeposit({
			createCheckDepositRequest: buildCreateCheckDepositRequest(
				shared.accountId,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("checkDeposit");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.status).toBeDefined();
	});
});
