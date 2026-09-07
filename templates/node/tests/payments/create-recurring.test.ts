import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCreateRecurringBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.createRecurringPayment", () => {
	it("creates a recurring book payment between shared deposit accounts", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.createRecurringPayment({
			createRecurringPaymentRequest: buildCreateRecurringBookPaymentRequest(
				shared.accountId,
				shared.counterpartyAccountId,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("recurringCreditBookPayment");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
