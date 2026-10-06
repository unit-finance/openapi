from helpers.api import build_statements_api, requires_token
from helpers.shared_account import get_or_create_shared_account


@requires_token
def test_downloads_the_bank_verification_pdf_for_an_account():
    account_id = get_or_create_shared_account()["account_id"]

    res = build_statements_api().get_bank_verification_pdf_with_http_info(
        account_id, include_proof_of_funds="false"
    )

    assert res.status_code == 200
    assert res.data is not None
