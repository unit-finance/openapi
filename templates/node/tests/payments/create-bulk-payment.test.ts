import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildBulkPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.createBulkPayment", () => {
	it("accepts a bulk book payment request", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const { data, status } = await api.createBulkPayment({
			createBulkPaymentRequest: buildBulkPaymentRequest(
				ctx.accountId,
				ctx.secondaryAccountId,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("bulkPayment");
		expect(data.data.attributes).toBeDefined();
	});
});
