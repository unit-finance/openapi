import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { createSendLinkOrSkip } from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.createCheckDepositSendLink", () => {
	it("creates a check deposit send link", async () => {
		const api = buildCheckDepositsApi();

		// Requires a white-label theme and authorized user that a plain sandbox
		// org may not have; the helper returns null (skip) when the org rejects
		// the request for a missing relationship.
		const created = await createSendLinkOrSkip(api);
		if (!created) return;
		const { data, status } = created;

		expect(status).toBe(201);
		expect(data.data).toBeDefined();
		expect(typeof data.data.type).toBe("string");
	});
});
