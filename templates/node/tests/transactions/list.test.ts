import { buildTransactionsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedTransaction } from "../helpers/transactions";

describeIfToken("TransactionsApi.listTransactions", () => {
	it("returns a JSON:API list of transactions for an account", async () => {
		const api = buildTransactionsApi();
		const shared = await getOrCreateSharedTransaction();

		// Scope to Book transactions: the shared account is funded via an
		// ATM-deposit simulation whose `atmTransaction` omits `tags`, a field the
		// strict deserializers in the other language SDKs require. Filtering to a
		// type whose responses carry `tags` keeps this assertion on
		// listTransactions consistent across languages.
		const { data, status } = await api.listTransactions({
			filterAccountId: shared.accountId,
			filterType: "Book",
			pageLimit: "20",
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const tx of data.data) {
			expect(typeof tx.type).toBe("string");
			expect(typeof tx.id).toBe("string");
			expect(tx.attributes).toBeDefined();
		}
	});
});
