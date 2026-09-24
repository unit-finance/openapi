import { buildDacaApi, describeIfToken } from "../helpers/api";
import { createAccountInDacaState } from "../helpers/daca";
import { buildUpdateDacaPoliciesRequest } from "../helpers/fixtures";

describeIfToken("DACAApi.enterControlAgreement", () => {
	it("enters a control agreement on a dedicated deposit account", async () => {
		const api = buildDacaApi();
		const accountId = await createAccountInDacaState("none");

		const { data, status } = await api.enterControlAgreement({
			accountId,
			body: buildUpdateDacaPoliciesRequest(accountId),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(accountId);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
