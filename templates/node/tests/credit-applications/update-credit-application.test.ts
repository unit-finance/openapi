import { buildCreditApplicationsApi, describeIfToken } from "../helpers/api";
import { getCreditApplicationId } from "../helpers/credit";
import { buildUpdateCreditApplicationRequest } from "../helpers/fixtures";

describeIfToken("CreditApplicationsApi.updateCreditApplication", () => {
	it("patches the underwriting attributes of a credit application", async () => {
		const creditApplicationId = await getCreditApplicationId();
		if (!creditApplicationId) return;

		const api = buildCreditApplicationsApi();
		const { data, status } = await api.updateCreditApplication({
			creditApplicationId,
			updateCreditApplicationRequest: buildUpdateCreditApplicationRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(creditApplicationId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
