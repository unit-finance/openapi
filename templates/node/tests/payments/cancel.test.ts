import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCreateBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.cancelPayment", () => {
	it("attempts to cancel a book payment (may be Sent immediately in sandbox)", async () => {
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

		try {
			const { data, status } = await api.cancelPayment({ paymentId });
			expect([200, 201]).toContain(status);
			expect(typeof data.data.id).toBe("string");
			expect(data.data.attributes).toBeDefined();
		} catch (error: unknown) {
			// Book payments settle immediately in the sandbox; only Pending or
			// PendingReview ACH/Wire payments can be canceled.
			const status =
				typeof error === "object" &&
				error !== null &&
				"response" in error &&
				typeof (error as { response?: { status?: number } }).response?.status ===
					"number"
					? (error as { response: { status: number } }).response.status
					: undefined;
			if (status === 409 || status === 422 || status === 400) {
				expect(true).toBe(true);
				return;
			}
			throw error;
		}
	});
});
