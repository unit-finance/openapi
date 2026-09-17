from helpers.api import build_api, requires_token
from helpers.check_deposits import read_json
from helpers.shared_app import get_or_create_shared_business_app


@requires_token
def test_returns_the_application_by_id():
    api = build_api()
    shared = get_or_create_shared_business_app()

    # Read the raw body: since spec 0.10.0 the response compound-includes
    # ApplicationDocument resources whose spec-required attributes the sandbox
    # returns as null, which trips the strict Pydantic oneOf deserializer (see
    # helpers/shared_app.py). This is a spec defect owned by unit-openapi.
    status, document = read_json(
        api.get_by_id_without_preload_content(shared["id"])
    )

    assert status == 200
    data = document["data"]
    assert data["id"] == shared["id"]
    assert data["type"] == shared["type"]
    assert "attributes" in data
