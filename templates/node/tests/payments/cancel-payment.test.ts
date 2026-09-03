import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildAchDebitPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.cancelPayment", () => {
	it("cancels a pending ACH debit payment", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const created = await api.createPayment({
			createPaymentRequest: buildAchDebitPaymentRequest(ctx.accountId),
		});
		expect(created.status).toBe(201);
		const paymentId = created.data.data.id;

		const { data, status } = await api.cancelPayment({ paymentId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(paymentId);
		expect(["achPayment", "wirePayment"]).toContain(data.data.type);
	});
});
