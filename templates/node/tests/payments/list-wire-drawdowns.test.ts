import { buildPaymentsApi, describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.listWireDrawdowns", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildPaymentsApi();
		const { data, status } = await api.listWireDrawdowns({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
	});
});
