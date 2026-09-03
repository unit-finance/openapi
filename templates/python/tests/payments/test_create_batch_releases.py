from helpers.api import build_payments_api, requires_token
from helpers.shared_account import get_or_create_shared_account_context


@requires_token
def test_creates_batch_releases_when_a_batch_account_is_configured():
    ctx = get_or_create_shared_account_context()
    api = build_payments_api()
    res = api.create_batch_releases_with_http_info(
        {
            "data": [
                {
                    "type": "batchRelease",
                    "attributes": {
                        "amount": 100,
                        "description": "SDK batch release",
                        "senderName": "SDK Sender",
                        "senderAccountNumber": "1234567890",
                        "senderAddress": {
                            "street": "20 Ingram St",
                            "city": "Forest Hills",
                            "state": "NY",
                            "postalCode": "11375",
                            "country": "US",
                        },
                    },
                    "relationships": {
                        "receiver": {
                            "data": {"type": "depositAccount", "id": ctx["account_id"]},
                        },
                    },
                },
            ],
        }
    )

    assert res.status_code == 201
    assert isinstance(res.data.data, list)
