import pytest

from helpers.api import build_customers_api, requires_token, unwrap
from helpers.fixtures import build_create_business_wallet_customer_request


# Skipped: the sandbox org behind UNIT_SANDBOX_TOKEN has no partner bank named
# "Thread" (the create request 404s with "The specified bank was not found").
# The available banks are org config we can't query from this SDK's spec
# surface. Re-enable (remove the skip mark) once the fixture's bank_name is set
# to a bank provisioned for the sandbox org.
@pytest.mark.skip(reason="sandbox org has no 'Thread' partner bank; see comment")
@requires_token
def test_creates_a_business_wallet_customer():
    api = build_customers_api()
    res = api.create_business_wallet_customer_with_http_info(
        build_create_business_wallet_customer_request()
    )

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "businessWalletCustomer"
    assert isinstance(data.id, str)
    assert data.attributes is not None
