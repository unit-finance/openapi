import { buildCounterpartiesApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCounterparty } from "../helpers/counterparties";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("CounterpartiesApi.listCounterparties", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildCounterpartiesApi();
		const shared = await getOrCreateSharedAccount();
		// Guarantee at least one counterparty exists, and scope the listing to
		// this run's customer: the org accumulates counterparties whose `bank` is
		// null, which the spec marks required and the strictly-typed Python/Java
		// clients reject while deserializing the page.
		await getOrCreateSharedCounterparty();

		const { data, status } = await api.listCounterparties({
			pageLimit: "20",
			filterCustomerId: shared.customerId,
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const item of data.data) {
			expect(item.type).toBe("achCounterparty");
			expect(typeof item.id).toBe("string");
			expect(item.attributes).toBeDefined();
		}
	});
});
