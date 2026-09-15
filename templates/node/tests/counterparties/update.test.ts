import { buildCounterpartiesApi, describeIfToken } from "../helpers/api";
import { createDedicatedCounterparty } from "../helpers/counterparties";
import { buildUpdateCounterpartyRequest } from "../helpers/fixtures";

describeIfToken("CounterpartiesApi.updateCounterparty", () => {
	it("PATCHes the tags of a dedicated counterparty", async () => {
		const api = buildCounterpartiesApi();
		const counterparty = await createDedicatedCounterparty();

		const { data, status } = await api.updateCounterparty({
			counterpartyId: counterparty.id,
			updateCounterpartyRequest: buildUpdateCounterpartyRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(counterparty.id);
		expect(data.data.type).toBe("achCounterparty");
		expect(data.data.attributes).toBeDefined();
	});
});
