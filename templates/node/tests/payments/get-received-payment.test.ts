import { buildPaymentsApi, describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.getReceivedPayment", () => {
	it("returns a received payment when one exists", async () => {
		const api = buildPaymentsApi();
		const listed = await api.listReceivedPayments({ pageLimit: "1" });
		expect(listed.status).toBe(200);
		if (!listed.data.data.length) {
			// Sandbox may have no received payments; structural skip is acceptable.
			return;
		}
		const receivedId = listed.data.data[0].id;
		const { data, status } = await api.getReceivedPayment({ id: receivedId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(receivedId);
		expect(typeof data.data.type).toBe("string");
	});
});
