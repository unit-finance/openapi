import { buildTransactionsApi, describeIfToken } from "../helpers/api";
import { buildUpdateBookTransactionRequest } from "../helpers/fixtures";
import { getOrCreateSharedTransaction } from "../helpers/transactions";

describeIfToken("TransactionsApi.updateTransaction", () => {
	it("updates a book transaction's summary and tags", async () => {
		const api = buildTransactionsApi();
		const shared = await getOrCreateSharedTransaction();

		const { data, status } = await api.updateTransaction({
			transactionId: shared.transactionId,
			updateTransactionRequest: buildUpdateBookTransactionRequest(
				shared.accountId,
			),
		});

		expect(status).toBe(200);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.id).toBe(shared.transactionId);
		expect(data.data.attributes).toBeDefined();
	});
});
