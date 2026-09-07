import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCreateBulkPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.createBulkPayment", () => {
	it("creates a bulk payment from a book payment payload", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.createBulkPayment({
			createBulkPaymentRequest: buildCreateBulkPaymentRequest(
				shared.accountId,
				shared.counterpartyAccountId,
			),
		});

		expect(status).toBe(201);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
