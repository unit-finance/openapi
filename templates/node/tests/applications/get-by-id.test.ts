import { buildApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedBusinessApp } from "../helpers/sharedApp";

describeIfToken("ApplicationsApi.getById", () => {
	it("returns the application by id", async () => {
		const api = buildApi();
		const shared = await getOrCreateSharedBusinessApp();

		const { data, status } = await api.getById({ id: shared.id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(shared.id);
		expect(data.data.type).toBe(shared.type);
		expect(data.data.attributes).toBeDefined();
	});
});
