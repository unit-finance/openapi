"""Shared transaction, the Python analogue of Node's ``transactions.ts``.

Lazily provisions a ``bookTransaction`` on the shared account that the
Transactions suites (list / get / update / update-tags) reuse. A book payment
between the two shared deposit accounts posts a ``bookTransaction`` on the
source account; the account is funded first so the payment isn't rejected for
insufficient funds. The posted transaction is asynchronous, so we poll
``list_transactions`` until it appears.
"""

from typing import Any, Dict, Optional

from .api import build_payments_api, build_transactions_api, sleep, unwrap
from .fixtures import build_create_book_payment_request
from .funding import fund_account
from .shared_account import get_or_create_shared_account

_cached: Optional[Dict[str, Any]] = None


def get_or_create_shared_transaction() -> Dict[str, Any]:
    global _cached
    if _cached is not None:
        return _cached

    shared = get_or_create_shared_account()
    fund_account(shared["account_id"], 1000)

    payments = build_payments_api()
    created = payments.create_payment_with_http_info(
        build_create_book_payment_request(
            shared["account_id"], shared["counterparty_account_id"]
        )
    )
    if created.status_code != 201:
        raise RuntimeError(
            f"Failed to create book payment: expected status 201, "
            f"got {created.status_code}."
        )

    # Filter to Book transactions: the account is funded via an ATM-deposit
    # simulation whose `atmTransaction` response omits `tags`, which the
    # generated strict models reject. bookTransactions carry inherited tags and
    # deserialize cleanly, so scoping the query keeps the shared fixture usable.
    api = build_transactions_api()
    for _ in range(20):
        listed = api.list_transactions_with_http_info(
            filter_account_id=shared["account_id"],
            filter_type="Book",
            page_limit="100",
        )
        for item in listed.data.data:
            tx = unwrap(item)
            if tx.type == "bookTransaction":
                _cached = {
                    "account_id": shared["account_id"],
                    "transaction_id": tx.id,
                }
                return _cached
        sleep(1)
    raise RuntimeError(
        f"No bookTransaction posted on account {shared['account_id']} "
        f"after book payment.",
    )
