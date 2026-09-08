# Shared transaction, the Ruby analogue of Node's `transactions.ts` and
# Python's `shared_transaction.py`.
#
# Lazily provisions a `bookTransaction` on the shared account that the
# Transactions specs (list / get / update / update-tags) reuse. A book payment
# between the two shared deposit accounts posts a `bookTransaction` on the
# source account; the account is funded first so the payment isn't rejected for
# insufficient funds. The posted transaction is asynchronous, so we poll
# `list_transactions` until it appears.

require_relative 'api'
require_relative 'fixtures'
require_relative 'funding'
require_relative 'shared_account'

module Helpers
  module SharedTransaction
    @cached = nil

    module_function

    def get_or_create
      return @cached if @cached

      shared = Helpers::SharedAccount.get_or_create
      Helpers::Funding.fund_account(shared[:account_id], 1000)

      payments_api = Helpers::Api.build_payments_api
      _created, create_status, = payments_api.create_payment_with_http_info(
        Helpers::Fixtures.create_book_payment_request(
          shared[:account_id], shared[:counterparty_account_id]
        )
      )
      raise "Failed to create book payment: expected status 201, got #{create_status}." unless create_status == 201

      # Filter to Book transactions: the account is funded via an ATM-deposit
      # simulation whose `atmTransaction` response omits `tags`, which the
      # generated strict models reject. bookTransactions carry inherited tags
      # and deserialize cleanly, so scoping the query keeps the fixture usable.
      api = Helpers::Api.build_transactions_api
      20.times do
        data, = api.list_transactions_with_http_info(
          filter_account_id: shared[:account_id],
          filter_type: 'Book',
          page_limit: '100'
        )
        book_tx = (data.data || []).map { |tx| Helpers::Api.unwrap(tx) }
                                   .find { |tx| tx.type == 'bookTransaction' }
        if book_tx
          @cached = { account_id: shared[:account_id], transaction_id: book_tx.id }
          return @cached
        end

        Helpers::Api.sleep(1)
      end
      raise "No bookTransaction posted on account #{shared[:account_id]} after book payment."
    end
  end
end
