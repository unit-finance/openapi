import { buildDacaApi, describeIfToken } from "../helpers/api";
import { createAccountInDacaState } from "../helpers/daca";
import { buildUpdateDacaPoliciesRequest } from "../helpers/fixtures";

describeIfToken("DACAApi.deactivateControlAgreement", () => {
	it("deactivates a control agreement on an activated account", async () => {
		const api = buildDacaApi();
		const accountId = await createAccountInDacaState("activated");

		const { data, status } = await api.deactivateControlAgreement({
			accountId,
			body: buildUpdateDacaPoliciesRequest(accountId),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(accountId);
		expect(data.data.type).toBe("depositAccount");
		expect(data.data.attributes).toBeDefined();
	});
});
