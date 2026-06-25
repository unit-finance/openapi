import { buildApi, describeIfToken } from "../helpers/api";
import { buildUpdateBusinessApplicationRequest } from "../helpers/fixtures";
import { getOrCreateSharedBusinessApp } from "../helpers/sharedApp";

describeIfToken("ApplicationsApi.updateApplication", () => {
	it("PATCHes the shared business application", async () => {
		const api = buildApi();
		const shared = await getOrCreateSharedBusinessApp();

		const { data, status } = await api.updateApplication({
			id: shared.id,
			updateApplicationRequest: buildUpdateBusinessApplicationRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(shared.id);
		expect(data.data.type).toBe("businessApplication");
		expect(data.data.attributes).toBeDefined();
	});
});
