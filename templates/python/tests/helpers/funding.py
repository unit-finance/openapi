"""Account funding, the Python analogue of Node's ``helpers/funding.ts``.

Funds a sandbox deposit account so balance-dependent operations (fees, holds,
outbound payments) succeed instead of failing with ``InsufficientFunds``.

The ATM deposit simulation is not in the OpenAPI spec, so it is called with
raw HTTP. The card the simulation matches against is created with ``CardsApi``.

See https://www.unit.co/docs/api/cards/simulations/#create-atm-deposit
"""

import json
import urllib.error
import urllib.request
from typing import Any, Dict

from .api import BASE_PATH, TOKEN, build_accounts_api, build_cards_api, sleep, unwrap
from .fixtures import build_create_business_virtual_debit_card_request

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
    """Create a business virtual debit card and return its last 4 digits.

    Virtual debit cards are Active on creation, so the ATM simulation can match
    against the card immediately.
    """
    res = build_cards_api().create_card_with_http_info(
        build_create_business_virtual_debit_card_request(account_id)
    )
    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create card: expected status 201, got {res.status_code}."
        )
    card = unwrap(res.data.data)
    last4 = getattr(card.attributes, "last4_digits", None)
    if not card.id or not last4:
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
    _simulate_atm_deposit(account_id, max(minimum_balance * 10, 100_000), last4)

    for _ in range(20):
        if _account_balance(account_id) >= minimum_balance:
            return
        sleep(1)
    raise RuntimeError(
        f"Account {account_id} did not reach balance {minimum_balance} after funding.",
    )
