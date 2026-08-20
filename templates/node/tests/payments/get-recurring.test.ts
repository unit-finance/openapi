import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCreateRecurringBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.getRecurringPayment", () => {
	it("creates a recurring book payment then fetches it by id", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const created = await api.createRecurringPayment({
			createRecurringPaymentRequest: buildCreateRecurringBookPaymentRequest(
				shared.accountId,
				shared.counterpartyAccountId,
			),
		});
		expect(created.status).toBe(201);
		const recurringPaymentId = created.data.data.id;

		const { data, status } = await api.getRecurringPayment({
			id: recurringPaymentId,
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(recurringPaymentId);
		expect(data.data.type).toBe("recurringCreditBookPayment");
		expect(data.data.attributes).toBeDefined();
	});
});
