import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildRecurringBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.deleteRecurringPayment", () => {
	it("deletes a recurring payment", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const created = await api.createRecurringPayment({
			createRecurringPaymentRequest: buildRecurringBookPaymentRequest(
				ctx.accountId,
				ctx.secondaryAccountId,
			),
		});
		expect(created.status).toBe(201);
		const recurringId = created.data.data.id;

		const { status } = await api.deleteRecurringPayment({ id: recurringId });

		expect(status).toBe(204);
	});
});
