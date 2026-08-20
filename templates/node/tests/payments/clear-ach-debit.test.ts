import { buildPaymentsApi, describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.clearAchDebitPayment", () => {
	it("skips when no ACH debit payment in Clearing status is available", async () => {
		const api = buildPaymentsApi();

		// The Node SDK does not expose a list-payments endpoint, so this test
		// cannot reliably locate an ACH debit in Clearing status. Clearing
		// requires the Dynamic Clearing Period feature and a payment id.
		const paymentId = process.env.UNIT_SANDBOX_ACH_DEBIT_PAYMENT_ID;
		if (!paymentId) {
			test.skip(
				"No UNIT_SANDBOX_ACH_DEBIT_PAYMENT_ID env var; cannot exercise clearAchDebitPayment.",
			);
			return;
		}

		const { data, status } = await api.clearAchDebitPayment({ paymentId });

		expect([200, 201]).toContain(status);
		expect(data.data).toBeDefined();
	});
});
