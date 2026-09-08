package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.api.TransactionsApi;
import com.unit.finance.sdk.model.CreatePayment201Response;
import com.unit.finance.sdk.model.ListTransactions200Response;
import com.unit.finance.sdk.model.Transaction;
import java.io.IOException;

/**
 * Lazily provisions a {@code bookTransaction} on the shared account that the
 * Transactions suites (list / get / update / update-tags) reuse, mirroring the
 * Node {@code tests/helpers/transactions.ts}.
 *
 * <p>A book payment between the two shared deposit accounts posts a
 * {@code bookTransaction} on the source account; the account is funded first so
 * the payment isn't rejected for insufficient funds. The posted transaction is
 * asynchronous, so we poll {@code listTransactions} until it appears.
 */
final class SharedTransaction {

  final String accountId;
  final String transactionId;

  private SharedTransaction(String accountId, String transactionId) {
    this.accountId = accountId;
    this.transactionId = transactionId;
  }

  private static SharedTransaction cached;

  static synchronized SharedTransaction get()
      throws ApiException, InterruptedException, IOException {
    if (cached != null) {
      return cached;
    }
    SharedAccount shared = SharedAccount.get();
    Funding.fundAccount(shared.accountId, 1000);

    PaymentsApi payments = ApiSupport.buildPaymentsApi();
    ApiResponse<CreatePayment201Response> created =
        payments.createPaymentWithHttpInfo(
            Fixtures.createBookPaymentRequest(shared.accountId, shared.counterpartyAccountId));
    if (created.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create book payment: expected status 201, got "
              + created.getStatusCode()
              + ".");
    }

    // Filter to Book transactions: the account is funded via an ATM-deposit
    // simulation whose atmTransaction response omits `tags`, which the generated
    // strict Gson adapters reject. bookTransactions carry inherited tags and
    // deserialize cleanly, so scoping the query keeps the fixture usable.
    TransactionsApi api = ApiSupport.buildTransactionsApi();
    for (int attempt = 0; attempt < 20; attempt++) {
      ListTransactions200Response listed =
          api.listTransactions(
              "100", null, shared.accountId, null, null, null, null, null, null, null, "Book", null,
              null, null, null, null, null, null);
      if (listed.getData() != null) {
        for (Transaction item : listed.getData()) {
          if ("bookTransaction".equals(ApiSupport.jsonApiType(item))) {
            cached = new SharedTransaction(shared.accountId, ApiSupport.jsonApiId(item));
            return cached;
          }
        }
      }
      ApiSupport.sleep(1000);
    }
    throw new IllegalStateException(
        "No bookTransaction posted on account " + shared.accountId + " after book payment.");
  }
}
