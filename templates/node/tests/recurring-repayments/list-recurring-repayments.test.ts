import { buildRecurringRepaymentsApi, describeIfToken } from "../helpers/api";
import { RECURRING_REPAYMENT_TYPES } from "../helpers/repayments";

describeIfToken("RecurringRepaymentsApi.listRecurringRepayments", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildRecurringRepaymentsApi();

		const { data, status } = await api.listRecurringRepayments({
			pageLimit: "20",
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const recurring of data.data) {
			expect(typeof recurring.id).toBe("string");
			expect(RECURRING_REPAYMENT_TYPES).toContain(recurring.type);
			expect(recurring.attributes).toBeDefined();
		}
	});
});
