import { buildDisputesApi, describeIfToken } from "../helpers/api";

describeIfToken("DisputesApi.listDisputes", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildDisputesApi();

		const { data, status } = await api.listDisputes({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const dispute of data.data) {
			expect(typeof dispute.id).toBe("string");
			expect(dispute.type).toBe("dispute");
			expect(dispute.attributes).toBeDefined();
		}
	});
});
