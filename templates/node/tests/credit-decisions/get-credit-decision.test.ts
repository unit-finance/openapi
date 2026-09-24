import { buildCreditDecisionsApi, describeIfToken } from "../helpers/api";
import { listCreditDecisionsOrSkip } from "../helpers/credit";

describeIfToken("CreditDecisionsApi.getCreditDecision", () => {
	it("fetches a credit decision by id", async () => {
		const api = buildCreditDecisionsApi();
		// Decisions can only be created against a credit application, which needs
		// a lending program this org may not have; with an empty list there is
		// nothing to GET.
		const items = await listCreditDecisionsOrSkip(api);
		const first = items?.[0];
		if (!first || typeof first.id !== "string") return;

		const { data, status } = await api.getCreditDecision({ id: first.id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(first.id);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
