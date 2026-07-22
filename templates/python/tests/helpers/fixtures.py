"""Request-body fixtures, the Python analogue of Node's ``helpers/fixtures.ts``.

Bodies start life as plain dicts (enum fields use their literal wire values).
How they are then handed to the API depends on the endpoint's request type:

- Concrete request models with no nested ``oneOf`` (``cancel``,
  ``check-registered-agent-address``): a dict is fine. The generated method is
  ``@validate_call``-decorated, so pydantic coerces the dict straight into the
  concrete model and it serializes with its ``data`` envelope intact.

- Concrete request models with a nested ``oneOf`` (``update-beneficial-owner``,
  whose ``data.relationships.application.data`` is the ``RelationshipData``
  union): a raw dict does **not** work. ``@validate_call`` coercion leaves the
  nested union member unpopulated, so the relationship serializes as
  ``data: null`` and the API rejects it ("should be object"). We therefore
  build the concrete model via ``from_dict``, whose generated code recurses
  through ``RelationshipData.from_dict`` and constructs the union member.

- ``oneOf`` union request models (``create`` -> ``CreateApplicationRequest``,
  ``update`` -> ``UpdateApplicationRequest``): a raw dict does **not** work.
  ``@validate_call`` coerces the dict into the union, but the generated union's
  ``actual_instance`` stays ``None`` (the dict's ``data`` key is just dropped),
  so the request body goes out empty. We therefore build the concrete variant
  via ``from_dict`` and wrap it explicitly as the union's ``actual_instance``.
  Building the union via ``CreateApplicationRequest.from_dict`` is not viable
  either: ``update``'s variants overlap (multiple-match error) and ``create``'s
  need every required field present, so we pick the variant ourselves.
"""

from typing import Any, Dict, List

from unit_finance_sdk import (
    CreateAccountRequest,
    CreateApplicationRequest,
    CreateBusinessApplicationRequest,
    CreateDepositAccountRequest,
    CreateIndividualApplicationRequest,
    UpdateAccountRequest,
    UpdateApplicationRequest,
    UpdateBusinessApplicationRequest,
    UpdateBusinessBeneficialOwnerRequest,
    UpdateDepositAccountRequest,
)

from .api import TEST_RUN_ID


# Every builder below returns a freshly-constructed object graph. These
# helpers are factories (not shared constants) so that a test mutating a
# nested attribute of a built request can never leak into another test's
# fixture.
def _us_address() -> Dict[str, str]:
    return {
        "street": "20 Ingram St",
        "city": "Forest Hills",
        "state": "NY",
        "postalCode": "11375",
        "country": "US",
    }


def _us_phone() -> Dict[str, str]:
    return {"countryCode": "1", "number": "5555555555"}


def _full_name() -> Dict[str, str]:
    return {"first": "Peter", "last": "Parker"}


def _base_tags() -> Dict[str, str]:
    return {"testRun": TEST_RUN_ID}


def _business_contact() -> Dict[str, Any]:
    return {
        "fullName": _full_name(),
        "email": f"peter+{TEST_RUN_ID}@oscorp.com",
        "phone": _us_phone(),
    }


def _officer() -> Dict[str, Any]:
    return {
        "fullName": _full_name(),
        "dateOfBirth": "2001-08-15",
        "title": "CEO",
        "ssn": "721074426",
        "email": f"peter+{TEST_RUN_ID}@oscorp.com",
        "phone": _us_phone(),
        "address": _us_address(),
    }


def _beneficial_owners() -> List[Dict[str, Any]]:
    return [
        {
            "fullName": {"first": "Mary Jane", "last": "Watson"},
            "dateOfBirth": "2001-08-15",
            "ssn": "574567625",
            "email": f"mj+{TEST_RUN_ID}@oscorp.com",
            "phone": _us_phone(),
            "address": _us_address(),
            "percentage": 60,
        },
    ]


def _business_application_dict() -> Dict[str, Any]:
    return {
        "data": {
            "type": "businessApplication",
            "attributes": {
                "name": f"Pied Piper {TEST_RUN_ID}",
                "address": _us_address(),
                "phone": _us_phone(),
                "stateOfIncorporation": "DE",
                "ein": "123456789",
                "entityType": "Corporation",
                "yearOfIncorporation": "2020",
                "countriesOfOperation": ["US"],
                "businessVertical": "TechnologyMediaOrTelecom",
                "website": "https://www.piedpiper.com",
                "contact": _business_contact(),
                "officer": _officer(),
                "beneficialOwners": _beneficial_owners(),
                "annualRevenue": "Between500kAnd1m",
                "numberOfEmployees": "Between50And100",
                "cashFlow": "Predictable",
                "tags": _base_tags(),
            },
        },
    }


def build_business_application_request() -> CreateApplicationRequest:
    return CreateApplicationRequest(
        actual_instance=CreateBusinessApplicationRequest.from_dict(
            _business_application_dict()
        )
    )


def build_individual_application_request() -> Dict[str, Any]:
    return {
        "data": {
            "type": "individualApplication",
            "attributes": {
                # Either `ssn` or `passport` is required, never both.
                "ssn": "721074426",
                "fullName": _full_name(),
                "dateOfBirth": "2001-08-15",
                "address": _us_address(),
                "phone": _us_phone(),
                "email": f"peter+{TEST_RUN_ID}@oscorp.com",
                "occupation": "ArchitectOrEngineer",
                "annualIncome": "Between50kAnd100k",
                "sourceOfIncome": "EmploymentOrPayrollIncome",
                "tags": _base_tags(),
            },
        },
    }


def build_cancelable_individual_application_request() -> CreateApplicationRequest:
    """Individual application the sandbox lands in ``AwaitingDocuments``
    (applicant SSN ``000000003``), a non-terminal state that can be canceled.
    Business applications auto-approve in the sandbox even with a magic officer
    SSN, so the cancel flow exercises an individual applicant instead.

    See https://docs.unit.co/api/applications/simulations#simulate-application-statuses
    """
    body = build_individual_application_request()
    body["data"]["attributes"]["ssn"] = "000000003"
    return CreateApplicationRequest(
        actual_instance=CreateIndividualApplicationRequest.from_dict(body)
    )


def build_sole_proprietor_application_request() -> Dict[str, Any]:
    """Sole proprietor uses the ``individualApplication`` discriminator value
    but a distinct attribute set (``soleProprietorship: true`` plus
    business-style fields), and the SoleProprietor* revenue/employee buckets.
    """
    return {
        "data": {
            "type": "individualApplication",
            "attributes": {
                "ssn": "721074426",
                "fullName": _full_name(),
                "dateOfBirth": "2001-08-15",
                "address": _us_address(),
                "phone": _us_phone(),
                "email": f"peter+{TEST_RUN_ID}@oscorp.com",
                "soleProprietorship": True,
                "ein": "123456789",
                "dba": f"Pied Piper SP {TEST_RUN_ID}",
                "businessVertical": "TechnologyMediaOrTelecom",
                "annualRevenue": "Between100kAnd200k",
                "numberOfEmployees": "Between2And5",
                "website": "https://www.piedpiper.com",
                "tags": _base_tags(),
            },
        },
    }


def build_update_business_application_request() -> UpdateApplicationRequest:
    body = {
        "data": {
            "type": "businessApplication",
            "attributes": {"tags": {**_base_tags(), "updated": "true"}},
        },
    }
    return UpdateApplicationRequest(
        actual_instance=UpdateBusinessApplicationRequest.from_dict(body)
    )


def build_update_business_beneficial_owner_request(
    application_id: str,
) -> UpdateBusinessBeneficialOwnerRequest:
    body = {
        "data": {
            "type": "beneficialOwner",
            "attributes": {"occupation": "ArchitectOrEngineer"},
            "relationships": {
                "application": {
                    "data": {"type": "businessApplication", "id": application_id},
                },
            },
        },
    }
    # Build via from_dict (not a plain dict): the nested
    # data.relationships.application.data is the RelationshipData oneOf, which
    # @validate_call coercion would leave unpopulated. from_dict recurses
    # through RelationshipData.from_dict and constructs the union member.
    return UpdateBusinessBeneficialOwnerRequest.from_dict(body)


def build_check_registered_agent_address_request() -> Dict[str, Any]:
    return {
        "data": {
            "type": "checkRegisteredAgentAddress",
            "attributes": {"address": _us_address()},
        },
    }


def build_create_deposit_account_request(customer_id: str) -> CreateAccountRequest:
    body = {
        "data": {
            "type": "depositAccount",
            "attributes": {
                "depositProduct": "checking",
                "tags": _base_tags(),
            },
            "relationships": {
                "customer": {"data": {"type": "customer", "id": customer_id}},
            },
        },
    }
    return CreateAccountRequest(
        actual_instance=CreateDepositAccountRequest.from_dict(body)
    )


def build_update_deposit_account_request() -> UpdateAccountRequest:
    body = {
        "data": {
            "type": "depositAccount",
            "attributes": {"tags": {**_base_tags(), "updated": "true"}},
        },
    }
    return UpdateAccountRequest(
        actual_instance=UpdateDepositAccountRequest.from_dict(body)
    )


def build_verify_account_request(routing_number: str, account_number: str) -> Dict[str, Any]:
    return {
        "data": {
            "type": "accountVerify",
            "attributes": {
                "routingNumber": routing_number,
                "accountNumber": account_number,
            },
        },
    }


def build_close_deposit_account_request() -> Dict[str, Any]:
    return {
        "data": {
            "type": "depositAccountClose",
            "attributes": {"reason": "ByCustomer"},
        },
    }


def build_freeze_deposit_account_request() -> Dict[str, Any]:
    return {
        "data": {
            "type": "accountFreeze",
            "attributes": {
                "reason": "Other",
                "reasonText": "SDK integration test freeze",
            },
        },
    }


def build_create_fee_request(account_id: str) -> Dict[str, Any]:
    return {
        "data": {
            "type": "fee",
            "attributes": {
                "amount": 100,
                "description": "SDK integration test fee",
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "depositAccount", "id": account_id}},
            },
        },
    }


def build_reverse_fee_request(account_id: str, transaction_id: str) -> Dict[str, Any]:
    return {
        "data": {
            "type": "feeReversal",
            "attributes": {
                "description": "SDK integration test fee reversal",
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "depositAccount", "id": account_id}},
                "transaction": {"data": {"type": "transaction", "id": transaction_id}},
            },
        },
    }


def build_create_account_hold_request(account_id: str) -> Dict[str, Any]:
    return {
        "data": {
            "type": "createAccountHoldJson",
            "attributes": {
                "amount": 100,
                "description": "SDK integration test hold",
            },
            "relationships": {
                "account": {"data": {"type": "depositAccount", "id": account_id}},
            },
        },
    }


def build_release_account_hold_request() -> Dict[str, Any]:
    return {
        "data": {
            "type": "accountHold",
            "attributes": {"amount": 100},
        },
    }


def build_add_account_owners_request(customer_id: str) -> Dict[str, Any]:
    return {
        "data": {
            "attributes": {
                "data": [{"type": "customer", "id": customer_id}],
            },
        },
    }


def build_remove_account_owners_request(customer_id: str) -> Dict[str, Any]:
    return build_add_account_owners_request(customer_id)
