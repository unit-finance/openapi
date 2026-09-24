import { buildInstitutionsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("InstitutionsApi.getByRoutingNumber", () => {
	it("reads the institution behind the shared account's routing number", async () => {
		const api = buildInstitutionsApi();
		const { routingNumber } = await getOrCreateSharedAccount();

		const { data, status } = await api.getByRoutingNumber({ routingNumber });

		expect(status).toBe(200);
		// `institution` is keyed by routing number, so the resource carries no
		// JSON:API `id` — the spec marks it optional and the sandbox omits it.
		expect(data.data.type).toBe("institution");
		expect(data.data.attributes.routingNumber).toBe(routingNumber);
		expect(typeof data.data.attributes.name).toBe("string");
		expect(typeof data.data.attributes.isACHSupported).toBe("boolean");
		expect(typeof data.data.attributes.isWireSupported).toBe("boolean");
	});
});
