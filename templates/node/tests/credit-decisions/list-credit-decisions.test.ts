import { buildCreditDecisionsApi, describeIfToken } from "../helpers/api";
import { listCreditDecisionsOrSkip } from "../helpers/credit";

describeIfToken("CreditDecisionsApi.listCreditDecisions", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildCreditDecisionsApi();
		const items = await listCreditDecisionsOrSkip(api);
		if (!items) return;

		expect(Array.isArray(items)).toBe(true);
		expect(items.length).toBeLessThanOrEqual(20);
		for (const item of items) {
			expect(typeof item.id).toBe("string");
			expect(typeof item.type).toBe("string");
			expect(item.attributes).toBeDefined();
		}
	});
});
