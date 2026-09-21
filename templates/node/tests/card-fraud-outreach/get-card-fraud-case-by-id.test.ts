import { buildCardFraudOutreachApi, describeIfToken } from "../helpers/api";
import { listCasesOrSkip } from "../helpers/cardFraudOutreach";

describeIfToken("CardFraudOutreachApi.getCardFraudCaseById", () => {
	it("returns a card fraud case when one exists", async () => {
		const api = buildCardFraudOutreachApi();
		const items = await listCasesOrSkip(api);
		if (!items) return;

		if (!items.length) {
			expect(true).toBe(true);
			return;
		}

		const caseId = items[0].id as string;
		const { data, status } = await api.getCardFraudCaseById({ id: caseId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(caseId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
