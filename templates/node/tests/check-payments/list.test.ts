import { buildCheckPaymentsApi, describeIfToken } from "../helpers/api";

describeIfToken("CheckPaymentsApi.listCheckPayments", () => {
	it("returns a JSON:API list with page limit 10", async () => {
		const api = buildCheckPaymentsApi();

		const { data, status } = await api.listCheckPayments({ pageLimit: "10" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(10);
		for (const payment of data.data) {
			expect(payment.type).toBe("checkPayment");
			expect(typeof payment.id).toBe("string");
		}
	});
});
