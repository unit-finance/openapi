import { buildCreditApplicationsApi, describeIfToken } from "../helpers/api";
import { getCreditApplicationId } from "../helpers/credit";

describeIfToken("CreditApplicationsApi.getCreditApplication", () => {
	it("fetches a credit application by id", async () => {
		const creditApplicationId = await getCreditApplicationId();
		if (!creditApplicationId) return;

		const api = buildCreditApplicationsApi();
		const { data, status } = await api.getCreditApplication({
			creditApplicationId,
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(creditApplicationId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
