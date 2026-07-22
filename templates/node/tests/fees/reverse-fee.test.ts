import { buildFeesApi, describeIfToken } from "../helpers/api";
import {
	buildCreateFeeRequest,
	buildReverseFeeRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedDepositAccount } from "../helpers/sharedAccount";

describeIfToken("FeesApi.reverseFee", () => {
	it("reverses a fee on a deposit account", async () => {
		const api = buildFeesApi();
		const account = await getOrCreateSharedDepositAccount();

		const fee = await api.createFee({
			createFeeRequest: buildCreateFeeRequest(account.id),
		});
		expect(fee.status).toBe(201);

		const { data, status } = await api.reverseFee({
			reverseFeeRequest: buildReverseFeeRequest(
				account.id,
				fee.data.data.id,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("feeReversal");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.description).toBeDefined();
	});
});
