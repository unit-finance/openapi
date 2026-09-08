import type { Transaction } from "../..";
import { buildPaymentsApi, buildTransactionsApi, sleep } from "./api";
import { buildCreateBookPaymentRequest } from "./fixtures";
import { fundAccount } from "./funding";
import { getOrCreateSharedAccount } from "./sharedAccount";

export interface SharedTransaction {
	accountId: string;
	transactionId: string;
}

let cached: Promise<SharedTransaction> | null = null;

/**
 * Lazily provisions a `bookTransaction` on the shared account that the
 * Transactions suites (list / get / update / update-tags) reuse. A book
 * payment between the two shared deposit accounts posts a `bookTransaction`
 * on the source account; the account is funded first so the payment isn't
 * rejected for insufficient funds. The posted transaction is asynchronous, so
 * we poll `listTransactions` until it appears.
 */
export function getOrCreateSharedTransaction(): Promise<SharedTransaction> {
	if (cached) return cached;
	cached = (async () => {
		const shared = await getOrCreateSharedAccount();
		await fundAccount(shared.accountId, 1000);

		const payments = buildPaymentsApi();
		const created = await payments.createPayment({
			createPaymentRequest: buildCreateBookPaymentRequest(
				shared.accountId,
				shared.counterpartyAccountId,
			),
		});
		if (created.status !== 201) {
			throw new Error(
				`Failed to create book payment: expected status 201, got ${created.status}.`,
			);
		}

		// Filter to Book transactions: the account is funded via an ATM-deposit
		// simulation whose `atmTransaction` response omits `tags`, which the
		// strict deserializers in the Python/Ruby/Java SDKs reject.
		// bookTransactions carry inherited tags, so scoping the query keeps the
		// shared fixture usable across every language.
		const api = buildTransactionsApi();
		for (let attempt = 0; attempt < 20; attempt++) {
			const { data } = await api.listTransactions({
				filterAccountId: shared.accountId,
				filterType: "Book",
				pageLimit: "100",
			});
			const bookTx = data.data.find(
				(tx: Transaction) => tx.type === "bookTransaction",
			);
			if (bookTx) {
				return { accountId: shared.accountId, transactionId: bookTx.id };
			}
			await sleep(1000);
		}
		throw new Error(
			`No bookTransaction posted on account ${shared.accountId} after book payment.`,
		);
	})();
	return cached;
}
