import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildAchDebitPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.clearAchDebitPayment", () => {
	it("clears an ACH debit payment in clearing status", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const created = await api.createPayment({
			createPaymentRequest: buildAchDebitPaymentRequest(ctx.accountId),
		});
		expect(created.status).toBe(201);
		const paymentId = created.data.data.id;

		const { data, status } = await api.clearAchDebitPayment({ paymentId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(paymentId);
		expect(data.data.type).toBe("achPayment");
	});
});
