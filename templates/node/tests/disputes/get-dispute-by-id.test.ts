import { buildDisputesApi, describeIfToken } from "../helpers/api";
import { getFirstDisputeIdOrSkip } from "../helpers/disputes";

describeIfToken("DisputesApi.getDisputeById", () => {
	it("reads a single dispute resource", async () => {
		const api = buildDisputesApi();
		const id = await getFirstDisputeIdOrSkip();
		if (!id) return;

		const { data, status } = await api.getDisputeById({ id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(id);
		expect(data.data.type).toBe("dispute");
		expect(data.data.attributes).toBeDefined();
		expect(typeof data.data.attributes.status).toBe("string");
	});
});
