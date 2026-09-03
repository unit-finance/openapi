import { buildPaymentsApi, describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.listStoreLocations", () => {
	it("returns store locations for a postal code", async () => {
		const api = buildPaymentsApi();
		const { data, status } = await api.listStoreLocations({
			filterPostalCode: "11375",
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
	});
});
