import { buildCounterpartiesApi, describeIfToken } from "../helpers/api";
import { buildCreateCounterpartyRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("CounterpartiesApi.createCounterparty", () => {
	it("creates an ACH counterparty for the shared customer", async () => {
		const api = buildCounterpartiesApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.createCounterparty({
			createCounterpartyBody: buildCreateCounterpartyRequest(
				shared.customerId,
				shared.routingNumber,
				shared.accountNumber,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("achCounterparty");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.routingNumber).toBe(shared.routingNumber);
		expect(data.data.attributes.accountType).toBeDefined();
		expect(data.data.attributes.permissions).toBeDefined();
	});
});
