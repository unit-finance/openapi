import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCreateBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.createPayment", () => {
	it("creates a book payment between shared deposit accounts", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.createPayment({
			createPaymentRequest: buildCreateBookPaymentRequest(
				shared.accountId,
				shared.counterpartyAccountId,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("bookPayment");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
