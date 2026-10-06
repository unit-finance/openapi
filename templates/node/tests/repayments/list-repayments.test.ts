import { buildRepaymentsApi, describeIfToken } from "../helpers/api";
import { REPAYMENT_TYPES } from "../helpers/repayments";

describeIfToken("RepaymentsApi.listRepayments", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildRepaymentsApi();

		const { data, status } = await api.listRepayments({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const repayment of data.data) {
			expect(typeof repayment.id).toBe("string");
			expect(REPAYMENT_TYPES).toContain(repayment.type);
			expect(repayment.attributes).toBeDefined();
		}
	});
});
