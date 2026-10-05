from helpers.api import build_repayments_api, requires_token, unwrap
from helpers.repayments import REPAYMENT_TYPES, get_repayment_id


@requires_token
def test_fetches_a_repayment_by_id():
    repayment_id = get_repayment_id()
    if repayment_id is None:
        return

    res = build_repayments_api().get_repayment_with_http_info(repayment_id)

    assert res.status_code == 200
    repayment = unwrap(res.data.data)
    assert repayment.id == repayment_id
    assert repayment.type in REPAYMENT_TYPES
    assert repayment.attributes is not None
