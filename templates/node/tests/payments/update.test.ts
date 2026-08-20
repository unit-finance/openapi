import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import {
	buildCreateBookPaymentRequest,
	buildUpdateBookPaymentRequest,
} from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.updatePayment", () => {
	it("creates a book payment then updates its tags", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const created = await api.createPayment({
			createPaymentRequest: buildCreateBookPaymentRequest(
				shared.accountId,
				shared.counterpartyAccountId,
			),
		});
		expect(created.status).toBe(201);
		const paymentId = created.data.data.id;

		const { data, status } = await api.updatePayment({
			paymentId,
			updatePaymentRequest: buildUpdateBookPaymentRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(paymentId);
		expect(data.data.type).toBe("bookPayment");
		expect(data.data.attributes).toBeDefined();
	});
});
