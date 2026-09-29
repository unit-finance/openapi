import { buildPositivePayApi, describeIfToken } from "../helpers/api";
import { POSITIVE_PAY_TYPES } from "../helpers/positivePay";

describeIfToken("PositivePayApi.listPositivePay", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildPositivePayApi();

		const { data, status } = await api.listPositivePay({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const rule of data.data) {
			expect(typeof rule.id).toBe("string");
			expect(POSITIVE_PAY_TYPES).toContain(rule.type);
			expect(rule.attributes).toBeDefined();
		}
	});
});
