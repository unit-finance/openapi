import { buildFeesApi, describeIfToken } from "../helpers/api";
import { buildCreateFeeRequest } from "../helpers/fixtures";
import { fundAccount } from "../helpers/funding";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("FeesApi.createFee", () => {
	it("creates a fee on the shared deposit account", async () => {
		const api = buildFeesApi();
		const shared = await getOrCreateSharedAccount();
		await fundAccount(shared.accountId, 1000);

		const { data, status } = await api.createFee({
			createFeeRequest: buildCreateFeeRequest(shared.accountId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("fee");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
