import { buildFeesApi, describeIfToken } from "../helpers/api";
import { buildCreateFeeRequest } from "../helpers/fixtures";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("FeesApi.createFee", () => {
	it("creates a fee on a deposit account", async () => {
		const api = buildFeesApi();
		const account = await getOrCreateSharedDepositAccount();

		const { data, status } = await api.createFee({
			createFeeRequest: buildCreateFeeRequest(account.id),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("fee");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.amount).toBeDefined();
		expect(data.data.attributes.description).toBeDefined();
	});
});
