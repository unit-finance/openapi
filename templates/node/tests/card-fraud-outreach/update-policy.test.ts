import { buildCardFraudOutreachApi, describeIfToken } from "../helpers/api";
import { getOrCreatePolicy } from "../helpers/cardFraudOutreach";
import { buildUpdatePolicyRequest } from "../helpers/fixtures";

describeIfToken("CardFraudOutreachApi.updatePolicy", () => {
	it("updates a card fraud outreach policy", async () => {
		const api = buildCardFraudOutreachApi();
		const policy = await getOrCreatePolicy();
		if (!policy) return;

		const { data, status } = await api.updatePolicy({
			policyId: policy.id,
			updatePolicyRequest: buildUpdatePolicyRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(policy.id);
		expect(data.data.type).toBe("cardFraudOutreachPolicy");
		expect(data.data.attributes).toBeDefined();
	});
});
