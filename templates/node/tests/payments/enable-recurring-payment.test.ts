import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildRecurringBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.enableRecurringPayment", () => {
	it("enables a disabled recurring payment", async () => {
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
		await api.disableRecurringPayment({ id: recurringId });

		const { data, status } = await api.enableRecurringPayment({ id: recurringId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(recurringId);
	});
});
