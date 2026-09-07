import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildUpdateReceivedPaymentRequest } from "../helpers/fixtures";

describeIfToken("PaymentsApi.updateReceivedPayment", () => {
	it("updates tags on a received payment when one exists", async () => {
		const api = buildPaymentsApi();
		const listed = await api.listReceivedPayments({ pageLimit: "1" });
		expect(listed.status).toBe(200);

		if (!listed.data.data.length) {
			expect(true).toBe(true);
			return;
		}

		const receivedPaymentId = listed.data.data[0].id;
		const { data, status } = await api.updateReceivedPayment({
			id: receivedPaymentId,
			updateReceivedPaymentRequest: buildUpdateReceivedPaymentRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(receivedPaymentId);
		expect(data.data.attributes).toBeDefined();
	});
});
