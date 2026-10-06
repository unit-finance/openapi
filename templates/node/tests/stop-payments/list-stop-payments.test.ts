import { buildStopPaymentsApi, describeIfToken } from "../helpers/api";
import { STOP_PAYMENT_TYPES } from "../helpers/stopPayments";

describeIfToken("StopPaymentsApi.listStopPayments", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildStopPaymentsApi();

		const { data, status } = await api.listStopPayments({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const stopPayment of data.data) {
			expect(typeof stopPayment.id).toBe("string");
			expect(STOP_PAYMENT_TYPES).toContain(stopPayment.type);
			expect(stopPayment.attributes).toBeDefined();
		}
	});
});
