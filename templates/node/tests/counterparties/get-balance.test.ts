import { buildCounterpartiesApi, describeIfToken } from "../helpers/api";
import {
	getCounterpartyBalanceOrSkip,
	getOrCreateSharedCounterparty,
} from "../helpers/counterparties";

describeIfToken("CounterpartiesApi.getCounterpartyBalance", () => {
	it("returns the balance of the shared counterparty", async () => {
		const api = buildCounterpartiesApi();
		const counterparty = await getOrCreateSharedCounterparty();

		const response = await getCounterpartyBalanceOrSkip(api, counterparty.id);
		if (!response) return;
		const { data, status } = response;

		expect(status).toBe(200);
		expect(data.data.type).toBe("counterpartyBalance");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(typeof data.data.attributes.balance).toBe("number");
	});
});
