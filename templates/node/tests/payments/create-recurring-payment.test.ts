import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildRecurringBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.createRecurringPayment", () => {
	it("creates a recurring book payment", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const { data, status } = await api.createRecurringPayment({
			createRecurringPaymentRequest: buildRecurringBookPaymentRequest(
				ctx.accountId,
				ctx.secondaryAccountId,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("recurringCreditBookPayment");
		expect(typeof data.data.id).toBe("string");
	});
});
