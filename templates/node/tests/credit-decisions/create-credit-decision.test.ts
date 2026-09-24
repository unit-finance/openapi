import { describeIfToken } from "../helpers/api";
import {
	createCreditDecisionOrSkip,
	getCreditApplicationId,
} from "../helpers/credit";

describeIfToken("CreditDecisionsApi.createCreditDecision", () => {
	it("records an approved credit limit decision", async () => {
		const creditApplicationId = await getCreditApplicationId();
		if (!creditApplicationId) return;

		const created = await createCreditDecisionOrSkip(creditApplicationId);
		if (!created) return;
		const { data, status } = created;

		expect(status).toBe(201);
		expect(typeof data.data.id).toBe("string");
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
