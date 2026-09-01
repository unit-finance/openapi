"""Account funding, the Python analogue of Node's ``helpers/funding.ts``.

Funds a sandbox deposit account so balance-dependent operations (fees, holds,
outbound payments) succeed instead of failing with ``InsufficientFunds``.

Unit's sandbox exposes a one-shot ATM deposit simulation that credits an
account immediately. It isn't part of the generated SDK slice, so we call it
(and the card creation it matches against) with raw HTTP. Unlike ACH-debit
origination, it needs no Plaid processor token.

See https://www.unit.co/docs/api/cards/simulations/#create-atm-deposit
"""

import json
import urllib.error
import urllib.request
from typing import Any, Dict

from .api import BASE_PATH, TOKEN, build_accounts_api, sleep, unwrap

_JSON_API_HEADERS = {
    "Content-Type": "application/vnd.api+json",
    "Accept": "application/vnd.api+json",
}


def _raw_post(pathname: str, body: Dict[str, Any]) -> Dict[str, Any]:
    request = urllib.request.Request(
        f"{BASE_PATH}{pathname}",
        data=json.dumps(body).encode("utf-8"),
        headers={"Authorization": f"Bearer {TOKEN}", **_JSON_API_HEADERS},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request) as res:
            return json.loads(res.read().decode("utf-8"))
    except urllib.error.HTTPError as err:
        detail = err.read().decode("utf-8", "replace")
        raise RuntimeError(f"POST {pathname} -> HTTP {err.code}: {detail}") from err


def _account_balance(account_id: str) -> int:
    res = build_accounts_api().get_account_with_http_info(account_id)
    account = unwrap(res.data.data)
    return account.attributes.balance or 0


def _create_debit_card_last4(account_id: str) -> str:
    """Create a business virtual debit card on the account and return its last 4.

    The ATM deposit simulation matches the deposit to an existing card, so a
    fresh account needs one before it can be funded this way. Cards aren't part
    of the generated SDK slice, so this is a raw call. Virtual debit cards are
    Active on creation, so the simulation can match against it immediately.
    """
    created = _raw_post(
        "/cards",
        {
            "data": {
                "type": "businessVirtualDebitCard",
                "attributes": {
                    "fullName": {"first": "Peter", "last": "Parker"},
                    "dateOfBirth": "2001-08-10",
                    "phone": {"countryCode": "1", "number": "5555555555"},
                    "email": "peter@oscorp.com",
                    "address": {
                        "street": "20 Ingram St",
                        "city": "Forest Hills",
                        "state": "NY",
                        "postalCode": "11375",
                        "country": "US",
                    },
                },
                "relationships": {
                    "account": {"data": {"type": "depositAccount", "id": account_id}},
                },
            },
        },
    )
    data = created.get("data", {})
    last4 = data.get("attributes", {}).get("last4Digits")
    if not data.get("id") or not last4:
        raise RuntimeError("Created card is missing id or last4Digits.")
    return last4


def _simulate_atm_deposit(account_id: str, amount: int, last4_digits: str) -> None:
    _raw_post(
        "/sandbox/atm-deposits",
        {
            "data": {
                "type": "atmTransaction",
                "attributes": {
                    "amount": amount,
                    "atmName": "SDK Test ATM",
                    "atmLocation": "Cupertino, CA, US",
                    "last4Digits": last4_digits,
                },
                "relationships": {
                    "account": {"data": {"type": "depositAccount", "id": account_id}},
                },
            },
        },
    )


def fund_account(account_id: str, minimum_balance: int) -> None:
    """Ensure ``account_id`` holds at least ``minimum_balance`` cents, funding it
    via a simulated ATM deposit if needed. A no-op when the balance suffices.
    """
    if _account_balance(account_id) >= minimum_balance:
        return

    last4 = _create_debit_card_last4(account_id)
    # Deposit a comfortable multiple so one fund covers several downstream
    # charges within a test run.
    _simulate_atm_deposit(account_id, max(minimum_balance * 10, 100_000), last4)

    for _ in range(20):
        if _account_balance(account_id) >= minimum_balance:
            return
        sleep(1)
    raise RuntimeError(
        f"Account {account_id} did not reach balance {minimum_balance} after funding.",
    )
