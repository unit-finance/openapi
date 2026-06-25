from unit_finance_sdk import (
    CreateIndividualApplicationRequest,
    CreateSoleProprietorApplicationRequest,
)

from helpers.api import build_api, requires_token, unwrap
from helpers.fixtures import (
    build_business_application_request,
    build_individual_application_request,
    build_sole_proprietor_application_request,
)


@requires_token
def test_creates_business_application():
    api = build_api()
    res = api.create_application_with_http_info(build_business_application_request())

    assert res.status_code == 201
    data = unwrap(res.data.data)
    assert data.type == "businessApplication"
    assert isinstance(data.id, str)
    assert data.attributes is not None
    assert data.attributes.status is not None


# The spec types the `POST /applications` 201 `data` as BusinessApplication,
# and the generated client deserializes response bodies strictly, so only the
# Business variant survives a typed round-trip. The Individual and
# SoleProprietor variants are therefore validated as request-serialization
# checks (mirroring the Java suite) rather than live round-trips.
def test_serializes_individual_application_request():
    req = CreateIndividualApplicationRequest.from_dict(
        build_individual_application_request()
    )
    assert req.data.type == "individualApplication"
    assert req.data.attributes.ssn is not None


def test_serializes_sole_proprietor_application_request():
    req = CreateSoleProprietorApplicationRequest.from_dict(
        build_sole_proprietor_application_request()
    )
    assert req.data.type == "individualApplication"
    assert req.data.attributes.sole_proprietorship is True
