import { buildCounterpartiesApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCounterparty } from "../helpers/counterparties";

describeIfToken("CounterpartiesApi.getCounterparty", () => {
	it("returns the shared counterparty by id", async () => {
		const api = buildCounterpartiesApi();
		const counterparty = await getOrCreateSharedCounterparty();

		const { data, status } = await api.getCounterparty({
			counterpartyId: counterparty.id,
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(counterparty.id);
		expect(data.data.type).toBe("achCounterparty");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.accountNumber).toBeDefined();
	});
});
