import {
	buildFeesApi,
	describeIfToken,
	getSandboxDepositAccountId,
} from "../helpers/api";
import {
	buildCreateFeeRequest,
	buildReverseFeeRequest,
} from "../helpers/fixtures";

describeIfToken("FeesApi.reverseFee", () => {
	it("reverses a previously created fee", async () => {
		const api = buildFeesApi();
		const accountId = await getSandboxDepositAccountId();

		const created = await api.createFee({
			createFeeRequest: buildCreateFeeRequest(accountId),
		});
		expect(created.status).toBe(201);
		const transactionId = created.data.data.id;

		const { data, status } = await api.reverseFee({
			reverseFeeRequest: buildReverseFeeRequest(accountId, transactionId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("feeReversal");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.description).toBeDefined();
	});
});
