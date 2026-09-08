import { buildTransactionsApi, describeIfToken } from "../helpers/api";
import { buildUpdateTransactionTagsRequest } from "../helpers/fixtures";
import { getOrCreateSharedTransaction } from "../helpers/transactions";

describeIfToken("TransactionsApi.updateTransactionTags", () => {
	it("updates tags on a transaction", async () => {
		const api = buildTransactionsApi();
		const shared = await getOrCreateSharedTransaction();

		const { data, status } = await api.updateTransactionTags({
			accountId: shared.accountId,
			transactionId: shared.transactionId,
			updateTagsRequest: buildUpdateTransactionTagsRequest(),
		});

		expect(status).toBe(200);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.id).toBe(shared.transactionId);
		expect(data.data.attributes).toBeDefined();
	});
});
