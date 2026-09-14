import { buildCustomersApi, describeIfToken } from "../helpers/api";

describeIfToken("CustomersApi.listCustomers", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildCustomersApi();
		const { data, status } = await api.listCustomers({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
	});
});
