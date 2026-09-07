import { buildFeesApi, describeIfToken } from "../helpers/api";
import {
	buildCreateFeeRequest,
	buildReverseFeeRequest,
} from "../helpers/fixtures";
import { fundAccount } from "../helpers/funding";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("FeesApi.reverseFee", () => {
	it("creates a fee then reverses it", async () => {
		const api = buildFeesApi();
		const shared = await getOrCreateSharedAccount();
		await fundAccount(shared.accountId, 1000);

		const created = await api.createFee({
			createFeeRequest: buildCreateFeeRequest(shared.accountId),
		});
		expect(created.status).toBe(201);
		const feeId = created.data.data.id;

		const { data, status } = await api.reverseFee({
			reverseFeeRequest: buildReverseFeeRequest(
				shared.accountId,
				feeId,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("feeReversal");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
