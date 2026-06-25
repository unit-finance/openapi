import { buildApi, describeIfToken } from "../helpers/api";

describeIfToken("ApplicationsApi.list", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildApi();
		const { data, status } = await api.list({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const item of data.data) {
			expect(["businessApplication", "individualApplication"]).toContain(
				item.type,
			);
			expect(typeof item.id).toBe("string");
		}
	});
});
