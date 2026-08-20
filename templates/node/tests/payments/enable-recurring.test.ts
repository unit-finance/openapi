import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCreateRecurringBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.enableRecurringPayment", () => {
	it("creates a recurring book payment, disables it, then re-enables it", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const request = buildCreateRecurringBookPaymentRequest(
			shared.accountId,
			shared.counterpartyAccountId,
		);

		const created = await api.createRecurringPayment({
			createRecurringPaymentRequest: request,
		});
		expect(created.status).toBe(201);
		const recurringPaymentId = created.data.data.id;

		const disabled = await api.disableRecurringPayment({ id: recurringPaymentId });
		expect([200, 201]).toContain(disabled.status);

		const { data, status } = await api.enableRecurringPayment({
			id: recurringPaymentId,
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(recurringPaymentId);
		expect(data.data.attributes).toBeDefined();
	});
});
