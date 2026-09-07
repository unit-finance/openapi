import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCreateRecurringBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.deleteRecurringPayment", () => {
	it("creates a recurring book payment then deletes it", async () => {
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

		const { data, status } = await api.deleteRecurringPayment({
			id: recurringPaymentId,
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(recurringPaymentId);
		expect(data.data.attributes).toBeDefined();
	});
});
