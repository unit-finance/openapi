import { describeIfToken } from "../helpers/api";
import { createPolicyOrSkip } from "../helpers/cardFraudOutreach";

describeIfToken("CardFraudOutreachApi.createPolicy", () => {
	it("creates a card fraud outreach policy", async () => {
		// Requires email/message outreach settings and a white-label theme that
		// a plain sandbox org may not have; the helper returns null (skip) when
		// the org rejects the request for a missing relationship.
		const created = await createPolicyOrSkip();
		if (!created) return;
		const { data, status } = created;

		expect(status).toBe(201);
		expect(data.data.type).toBe("cardFraudOutreachPolicy");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
