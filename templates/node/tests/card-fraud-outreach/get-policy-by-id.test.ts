import { buildCardFraudOutreachApi, describeIfToken } from "../helpers/api";
import { getOrCreatePolicy } from "../helpers/cardFraudOutreach";

describeIfToken("CardFraudOutreachApi.getPolicyById", () => {
	it("returns a card fraud outreach policy by id", async () => {
		const api = buildCardFraudOutreachApi();
		const policy = await getOrCreatePolicy();
		if (!policy) return;

		const { data, status } = await api.getPolicyById({ policyId: policy.id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(policy.id);
		expect(data.data.type).toBe("cardFraudOutreachPolicy");
		expect(data.data.attributes).toBeDefined();
	});
});
