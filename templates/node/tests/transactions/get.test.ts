import { buildTransactionsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedTransaction } from "../helpers/transactions";

describeIfToken("TransactionsApi.getTransaction", () => {
	it("fetches a transaction by account and transaction id", async () => {
		const api = buildTransactionsApi();
		const shared = await getOrCreateSharedTransaction();

		const { data, status } = await api.getTransaction({
			accountId: shared.accountId,
			transactionId: shared.transactionId,
		});

		expect(status).toBe(200);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.id).toBe(shared.transactionId);
		expect(data.data.attributes).toBeDefined();
	});
});
