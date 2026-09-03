import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildUpdateReceivedPaymentRequest } from "../helpers/fixtures";

describeIfToken("PaymentsApi.updateReceivedPayment", () => {
	it("updates a received payment when one exists", async () => {
		const api = buildPaymentsApi();
		const listed = await api.listReceivedPayments({ pageLimit: "1" });
		expect(listed.status).toBe(200);
		if (!listed.data.data.length) return;
		const receivedId = listed.data.data[0].id;

		const { data, status } = await api.updateReceivedPayment({
			id: receivedId,
			updateReceivedPaymentRequest: buildUpdateReceivedPaymentRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(receivedId);
	});
});
