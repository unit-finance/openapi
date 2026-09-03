import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildBookPaymentRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.createPayment", () => {
	it("creates a book payment", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const { data, status } = await api.createPayment({
			createPaymentRequest: buildBookPaymentRequest(
				ctx.accountId,
				ctx.secondaryAccountId,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("bookPayment");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
