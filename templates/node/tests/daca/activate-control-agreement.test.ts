import { buildDacaApi, describeIfToken } from "../helpers/api";
import { createAccountInDacaState } from "../helpers/daca";
import { buildUpdateDacaPoliciesRequest } from "../helpers/fixtures";

describeIfToken("DACAApi.activateControlAgreement", () => {
	it("activates a control agreement on an entered account", async () => {
		const api = buildDacaApi();
		const accountId = await createAccountInDacaState("entered");

		const { data, status } = await api.activateControlAgreement({
			accountId,
			body: buildUpdateDacaPoliciesRequest(accountId),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(accountId);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
