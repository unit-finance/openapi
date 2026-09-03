import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import {
	buildBookPaymentRequest,
	buildUpdateBookPaymentRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.updatePayment", () => {
	it("updates a book payment", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const created = await api.createPayment({
			createPaymentRequest: buildBookPaymentRequest(
				ctx.accountId,
				ctx.secondaryAccountId,
			),
		});
		expect(created.status).toBe(201);
		const paymentId = created.data.data.id;

		const { data, status } = await api.updatePayment({
			paymentId,
			updatePaymentRequest: buildUpdateBookPaymentRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(paymentId);
		expect(data.data.type).toBe("bookPayment");
	});
});
