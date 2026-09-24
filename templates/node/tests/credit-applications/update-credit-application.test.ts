import { buildCreditApplicationsApi, describeIfToken } from "../helpers/api";
import { getPatchableCreditApplicationId } from "../helpers/credit";
import { buildUpdateCreditApplicationRequest } from "../helpers/fixtures";

describeIfToken("CreditApplicationsApi.updateCreditApplication", () => {
	it("patches the underwriting attributes of a credit application", async () => {
		// A dedicated application: an approved decision would flip the shared one
		// to `Approved`, which the API refuses to PATCH.
		const creditApplicationId = await getPatchableCreditApplicationId();
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
