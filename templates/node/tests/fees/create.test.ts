import {
	buildFeesApi,
	describeIfToken,
	getSandboxDepositAccountId,
} from "../helpers/api";
import { buildCreateFeeRequest } from "../helpers/fixtures";

describeIfToken("FeesApi.createFee", () => {
	it("creates a fee on a deposit account", async () => {
		const api = buildFeesApi();
		const accountId = await getSandboxDepositAccountId();
		const { data, status } = await api.createFee({
			createFeeRequest: buildCreateFeeRequest(accountId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("fee");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.amount).toBeDefined();
		expect(data.data.attributes.description).toBeDefined();
	});
});
