import { buildFeesApi, describeIfToken } from "../helpers/api";
import { buildCreateFeeRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("FeesApi.createFee", () => {
	it("creates a fee for a deposit account", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildFeesApi();
		const { data, status } = await api.createFee({
			createFeeRequest: buildCreateFeeRequest(ctx.accountId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("fee");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.amount).toBeDefined();
	});
});
