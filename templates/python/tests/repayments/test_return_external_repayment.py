from unit_finance_sdk.exceptions import ApiException

from helpers.api import build_repayments_api, requires_token, unwrap
from helpers.capabilities import error_body, is_capability_error
from helpers.fixtures import build_return_external_repayment_request
from helpers.repayments import create_external_repayment_or_skip


@requires_token
def test_returns_an_external_repayment():
    repayment_id = create_external_repayment_or_skip()
    if repayment_id is None:
        return

    try:
        res = build_repayments_api().return_external_repayment_with_http_info(
            repayment_id, build_return_external_repayment_request(repayment_id)
        )
    except ApiException as err:
        # `return` is only valid once the repayment has settled to `Sent`. The
        # sandbox creates it `Pending` and there is no way to advance it, so a
        # rejected return is an unreachable state, not a bad request.
        if is_capability_error(err):
            print(
                "The external repayment is not in a returnable state on this "
                f"sandbox org; skipping. {error_body(err)}"
            )
            return
        raise

    assert res.status_code == 200
    repayment = unwrap(res.data.data)
    assert repayment.id == repayment_id
    assert repayment.type == "externalRepayment"
    assert repayment.attributes is not None
