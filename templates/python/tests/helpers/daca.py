"""DACA state provisioning, the Python analogue of Node's ``helpers/daca.ts``."""

from .api import build_daca_api
from .fixtures import build_update_daca_policies_request
from .shared_account import create_dedicated_deposit_account


def create_account_in_daca_state(state: str) -> str:
    """A dedicated deposit account advanced through the prior DACA transitions.

    ``activate`` requires the account to be ``Entered`` and ``deactivate``
    requires it to be ``Activated``; otherwise the API rejects the call with
    400 ``invalid_daca_status_transition``. Each suite takes its own account so
    the transitions never depend on file execution order.
    """
    account_id = create_dedicated_deposit_account().id
    if state == "none":
        return account_id

    api = build_daca_api()
    api.enter_control_agreement_with_http_info(
        account_id,
        build_update_daca_policies_request(account_id),
    )
    if state == "entered":
        return account_id

    api.activate_control_agreement_with_http_info(
        account_id,
        build_update_daca_policies_request(account_id),
    )
    return account_id
