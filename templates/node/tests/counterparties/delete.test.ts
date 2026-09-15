import { buildCounterpartiesApi, describeIfToken } from "../helpers/api";
import { createDedicatedCounterparty } from "../helpers/counterparties";

describeIfToken("CounterpartiesApi.deleteCounterparty", () => {
	it("creates a dedicated counterparty then deletes it", async () => {
		const api = buildCounterpartiesApi();
		const counterparty = await createDedicatedCounterparty();

		const { status } = await api.deleteCounterparty({
			counterpartyId: counterparty.id,
		});

		// The spec documents 204 for DELETE /counterparties/{id}; the sandbox
		// answers 200 with an empty body.
		expect([200, 204]).toContain(status);
	});
});
