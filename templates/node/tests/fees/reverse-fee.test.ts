import { buildFeesApi, describeIfToken } from "../helpers/api";
import { buildCreateFeeRequest, buildReverseFeeRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("FeesApi.reverseFee", () => {
	it("reverses a fee", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildFeesApi();
		const created = await api.createFee({
			createFeeRequest: buildCreateFeeRequest(ctx.accountId),
		});
		expect(created.status).toBe(201);
		const fee = created.data.data as {
			relationships?: {
				account?: { data?: { id?: string } };
				transaction?: { data?: { id?: string } };
			};
		};
		const accountId = fee.relationships?.account?.data?.id ?? ctx.accountId;
		const transactionId = fee.relationships?.transaction?.data?.id;
		expect(transactionId).toBeDefined();

		const { data, status } = await api.reverseFee({
			reverseFeeRequest: buildReverseFeeRequest(accountId, transactionId!),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("feeReversal");
		expect(typeof data.data.id).toBe("string");
	});
});
