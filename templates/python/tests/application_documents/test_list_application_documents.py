from helpers.api import build_application_documents_api, requires_token
from helpers.check_deposits import read_json
from helpers.shared_app import get_or_create_shared_business_app


@requires_token
def test_returns_json_api_list_of_application_documents():
    api = build_application_documents_api()
    shared = get_or_create_shared_business_app()

    status, document = read_json(
        api.list_application_documents_without_preload_content(shared["id"])
    )

    assert status == 200
    items = document["data"]
    assert isinstance(items, list)
    for doc in items:
        assert isinstance(doc["type"], str)
        assert isinstance(doc["id"], str)
        assert "attributes" in doc
