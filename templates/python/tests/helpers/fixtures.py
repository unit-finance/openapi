"""Request-body fixtures, the Python analogue of Node's ``helpers/fixtures.ts``.

Bodies start life as plain dicts (enum fields use their literal wire values).
How they are then handed to the API depends on the endpoint's request type:

- Concrete request models with no nested ``oneOf`` (``cancel``): a dict is
  fine. The generated method is
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

import time
import uuid
from datetime import date, datetime, timedelta, timezone
from typing import Any, Dict, List, Optional

from unit_finance_sdk import (
    AddAuthorizedUsersRequest,
    ApproveCheckPaymentAdditionalVerificationRequest,
    ArchiveCustomerRequest,
    CloseAccountRequest,
    CloseDepositAccountRequest,
    CreateABookPaymentRequest,
    CreateAccountHoldRequest,
    CreateAccountRequest,
    CreateACHPaymentRequest,
    CreateApplicationRequest,
    CreateApprovedCreditLimitDecisionRequest,
    CreateBulkPaymentRequest,
    CreateBusinessApplicationRequest,
    CreateBusinessDebitCardRequest,
    CreateBusinessVirtualDebitCardRequest,
    CreateBusinessWalletCustomerRequest,
    CreateCardholderTokenRequest,
    CreateCardholderTokenVerificationRequest,
    CreateCardRequest,
    CreateCheckDepositRequest,
    CreateCheckDepositSendLinkRequest,
    CreateCounterpartyBody,
    CreateCounterpartyRequest,
    CreateCreditApplicationRequest,
    CreateCreditDecisionRequest,
    CreateDepositAccountRequest,
    CreateExistingCreditApplicationRequest,
    CreateFeeRequest,
    CreateIndividualApplicationRequest,
    CreatePaymentRequest,
    CreatePolicyRequest,
    CreateRecurringCreditBookPaymentRequest,
    CreateRecurringPaymentRequest,
    FreezeAccountRequest,
    FreezeCardRequest,
    FreezeDepositAccountRequest,
    GetExpectedAchCompletionDateRequest,
    GetMobileWalletPayloadRequest,
    MarkCardFraudCaseAsFraudRequest,
    OriginateCheckPaymentMailPhysicalCheckRequest,
    RemoveAuthorizedUsersRequest,
    ReplaceCardRequest,
    ReturnCheckPaymentRequest,
    ReverseFeeRequest,
    UpdateAccountRequest,
    UpdateApplicationRequest,
    UpdateBookPaymentRequest,
    UpdateBookTransactionRequest,
    UpdateBusinessApplicationRequest,
    UpdateBusinessBeneficialOwnerRequest,
    UpdateBusinessCustomerOfficerRequest,
    UpdateBusinessCustomerRequest,
    UpdateCardRequest,
    UpdateCheckDepositRequest,
    UpdateCounterpartyRequest,
    UpdateCreditApplicationRequest,
    UpdateCustomerRequest,
    UpdateDepositAccountRequest,
    UpdatePaymentRequest,
    UpdatePolicyRequest,
    UpdateTagsRequest,
    UpdateTransactionRequest,
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


def _create_deposit_account_dict(customer_id: str) -> Dict[str, Any]:
    return {
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


def build_deposit_account_request_for_customer(customer_id: str) -> CreateAccountRequest:
    return CreateAccountRequest(
        actual_instance=CreateDepositAccountRequest.from_dict(
            _create_deposit_account_dict(customer_id)
        )
    )


def build_create_deposit_account_request(customer_id: str) -> CreateAccountRequest:
    return build_deposit_account_request_for_customer(customer_id)


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


def build_close_deposit_account_request() -> CloseAccountRequest:
    body = {
        "data": {
            "type": "depositAccountClose",
            "attributes": {"reason": "ByCustomer"},
        },
    }
    return CloseAccountRequest(
        actual_instance=CloseDepositAccountRequest.from_dict(body)
    )


def build_freeze_deposit_account_request() -> FreezeAccountRequest:
    body = {
        "data": {
            "type": "accountFreeze",
            "attributes": {"reason": "Fraud"},
        },
    }
    return FreezeAccountRequest(
        actual_instance=FreezeDepositAccountRequest.from_dict(body)
    )


# The ``account``/``fee`` relationships below are the ``RelationshipData``
# oneOf union. A raw dict handed to a @validate_call method leaves the union
# member unpopulated (relationship serializes as ``data: null`` -> the API
# rejects it with "should be object"), so we build the concrete request model
# via ``from_dict``, which recurses through ``RelationshipData.from_dict``.
def build_create_fee_request(account_id: str) -> CreateFeeRequest:
    body = {
        "data": {
            "type": "fee",
            "attributes": {
                "amount": 100,
                "description": "SDK integration test fee",
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
            },
        },
    }
    return CreateFeeRequest.from_dict(body)


def build_reverse_fee_request(
    account_id: str,
    transaction_id: str,
) -> ReverseFeeRequest:
    body = {
        "data": {
            "type": "feeReversal",
            "attributes": {
                "description": "SDK integration test fee reversal",
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
                "transaction": {"data": {"type": "transaction", "id": transaction_id}},
            },
        },
    }
    return ReverseFeeRequest.from_dict(body)


# The spec marks ``idempotencyKey`` optional on both hold requests, but the
# sandbox rejects them with a 400 unless it is present. Each call gets a fresh
# key so that separately-built holds are never collapsed into one another.
def build_create_account_hold_request(account_id: str) -> CreateAccountHoldRequest:
    # Built via from_dict for the same oneOf-relationship reason as the fee
    # fixtures above.
    body = {
        "data": {
            "type": "accountHold",
            "attributes": {
                "amount": 500,
                "description": "SDK integration test hold",
                "idempotencyKey": f"{TEST_RUN_ID}-hold-{uuid.uuid4().hex[:8]}",
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
            },
        },
    }
    return CreateAccountHoldRequest.from_dict(body)


def build_release_account_hold_request(amount: int = 500) -> Dict[str, Any]:
    return {
        "data": {
            "type": "accountHold",
            "attributes": {"amount": amount},
        },
    }


def build_originate_check_payment_request(
    account_id: str, customer_id: str
) -> OriginateCheckPaymentMailPhysicalCheckRequest:
    send_date = (date.today() + timedelta(days=30)).isoformat()
    body = {
        "data": {
            "type": "checkPayment",
            "attributes": {
                "amount": 1000,
                "description": "SDK integration test check payment",
                "idempotencyKey": f"{TEST_RUN_ID}-check-payment-{uuid.uuid4().hex[:8]}",
                "sendDate": send_date,
                "counterparty": {
                    "name": "April Oneil",
                    "address": _us_address(),
                },
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
                "customer": {"data": {"type": "customer", "id": customer_id}},
            },
        },
    }
    return OriginateCheckPaymentMailPhysicalCheckRequest.from_dict(body)


def build_return_check_payment_request() -> ReturnCheckPaymentRequest:
    body = {
        "data": {
            "type": "checkPaymentReturn",
            "attributes": {"reason": "StopPayment"},
        },
    }
    return ReturnCheckPaymentRequest.from_dict(body)


def build_approve_check_payment_additional_verification_request() -> (
    ApproveCheckPaymentAdditionalVerificationRequest
):
    body = {
        "data": {
            "type": "additionalVerification",
            "attributes": {},
        },
    }
    return ApproveCheckPaymentAdditionalVerificationRequest.from_dict(body)


# A check deposit is created against an existing account; `amount` and
# `description` are the only required attributes. The account relationship uses
# the generic "account" resource type (matching the hold/fee fixtures). Built
# via from_dict for the same oneOf-relationship reason as those fixtures.
def build_create_check_deposit_request(account_id: str) -> CreateCheckDepositRequest:
    body = {
        "data": {
            "type": "checkDeposit",
            "attributes": {
                "amount": 20000,
                "description": "SDK integration test check deposit",
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
            },
        },
    }
    return CreateCheckDepositRequest.from_dict(body)


# updateCheckDeposit only exposes `tags` (and the optional clearingDaysOverride);
# `tags` is required on the update envelope.
def build_update_check_deposit_request() -> UpdateCheckDepositRequest:
    body = {
        "data": {
            "type": "checkDeposit",
            "attributes": {"tags": {**_base_tags(), "updated": "true"}},
        },
    }
    return UpdateCheckDepositRequest.from_dict(body)


# The send-link component requires a white-label theme and an authorized user
# alongside the account. Sandbox orgs without those resources reject the call,
# so the suite treats a validation error as a feature-unavailable skip.
def build_create_check_deposit_send_link_request(
    account_id: str,
    white_label_theme_id: str,
    authorized_user_id: str,
) -> CreateCheckDepositSendLinkRequest:
    body = {
        "data": {
            "type": "sendLinkForCheckDepositComponent",
            "attributes": {
                "qrCode": True,
                "idempotencyKey": f"{TEST_RUN_ID}-send-link-{uuid.uuid4().hex[:8]}",
            },
            "relationships": {
                "whiteLabelTheme": {
                    "data": {"type": "whiteLabelTheme", "id": white_label_theme_id}
                },
                "account": {"data": {"type": "account", "id": account_id}},
                "authorizedUser": {
                    "data": {"type": "authorizedUser", "id": authorized_user_id}
                },
            },
        },
    }
    return CreateCheckDepositSendLinkRequest.from_dict(body)


def build_create_book_payment_request(
    account_id: str,
    counterparty_account_id: str,
) -> CreatePaymentRequest:
    body = {
        "data": {
            "type": "bookPayment",
            "attributes": {
                "amount": 100,
                "description": "SDK integration test book payment",
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
                "counterpartyAccount": {
                    "data": {"type": "account", "id": counterparty_account_id},
                },
            },
        },
    }
    return CreatePaymentRequest(
        actual_instance=CreateABookPaymentRequest.from_dict(body)
    )


def build_create_bulk_payment_request(
    account_id: str,
    counterparty_account_id: str,
) -> CreateBulkPaymentRequest:
    body = {
        "data": [
            {
                "type": "bookPayment",
                "attributes": {
                    "amount": 100,
                    "description": "SDK integration test book payment",
                    "tags": _base_tags(),
                },
                "relationships": {
                    "account": {"data": {"type": "account", "id": account_id}},
                    "counterpartyAccount": {
                        "data": {"type": "account", "id": counterparty_account_id},
                    },
                },
            },
        ],
    }
    return CreateBulkPaymentRequest.from_dict(body)


def build_create_ach_payment_request(
    account_id: str,
    *,
    direction: str = "Credit",
) -> CreatePaymentRequest:
    body = {
        "data": {
            "type": "achPayment",
            "attributes": {
                "amount": 1000,
                "direction": direction,
                "description": "SDK test",
                "counterparty": {
                    "routingNumber": "812345678",
                    "accountNumber": "12345569",
                    "accountType": "Checking",
                    "name": "Jane Doe",
                },
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
            },
        },
    }
    return CreatePaymentRequest(
        actual_instance=CreateACHPaymentRequest.from_dict(body)
    )


def build_update_book_payment_request() -> UpdatePaymentRequest:
    body = {
        "data": {
            "type": "bookPayment",
            "attributes": {"tags": {**_base_tags(), "updated": "true"}},
        },
    }
    return UpdatePaymentRequest(
        actual_instance=UpdateBookPaymentRequest.from_dict(body)
    )


def build_get_expected_ach_completion_date_request(
    account_id: str,
) -> GetExpectedAchCompletionDateRequest:
    # Built via from_dict for the same oneOf-relationship reason as the fee
    # fixtures above.
    body = {
        "data": {
            "type": "achExpectedCompletionDate",
            "attributes": {
                "direction": "Credit",
                "amount": 1000,
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
            },
        },
    }
    return GetExpectedAchCompletionDateRequest.from_dict(body)


def build_create_recurring_book_payment_request(
    account_id: str,
    counterparty_account_id: str,
) -> CreateRecurringPaymentRequest:
    # NOTE: schedule.startTime/endTime are omitted deliberately. The spec marks
    # them "Date only", but the generator types them as `datetime`, so any value
    # we set is re-serialized with a time component and the sandbox rejects it
    # with `should match format "date"`. They are optional, so we leave them out
    # until the spec types them as a date. (Node sends them because typescript-
    # axios keeps them as plain strings.)
    body = {
        "data": {
            "type": "recurringCreditBookPayment",
            "attributes": {
                "amount": 100,
                "description": "SDK integration test recurring payment",
                "schedule": {
                    "interval": "Monthly",
                    "dayOfMonth": 15,
                },
                "tags": _base_tags(),
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
                "counterpartyAccount": {
                    "data": {"type": "account", "id": counterparty_account_id},
                },
            },
        },
    }
    return CreateRecurringPaymentRequest(
        actual_instance=CreateRecurringCreditBookPaymentRequest.from_dict(body)
    )


def build_update_received_payment_request() -> Dict[str, Any]:
    return {
        "data": {
            "type": "receivedPayment",
            "attributes": {"tags": {**_base_tags(), "updated": "true"}},
        },
    }


def build_generate_cash_deposit_barcode_request(
    account_id: str,
    customer_id: str,
    store_id: str,
) -> Dict[str, Any]:
    return {
        "data": {
            "type": "cashDepositBarcode",
            "attributes": {"storeId": store_id},
            "relationships": {
                "customer": {"data": {"type": "customer", "id": customer_id}},
                "account": {"data": {"type": "depositAccount", "id": account_id}},
            },
        },
    }


def build_create_batch_releases_request() -> Dict[str, Any]:
    return {
        "data": {
            "type": "batchRelease",
            "attributes": {
                "amount": 100,
                "description": "SDK integration test batch release",
                "senderName": "SDK Test Sender",
                "senderAddress": _us_address(),
                "senderAccountNumber": "12345678901234567",
                "tags": _base_tags(),
            },
        },
    }


def build_send_drawdown_payment_request() -> Dict[str, Any]:
    return {
        "data": {
            "type": "sendWireDrawdown",
            "attributes": {
                "idempotencyKey": str(uuid.uuid4()),
                "tags": _base_tags(),
            },
        },
    }


def _card_holder() -> Dict[str, Any]:
    return {
        "fullName": _full_name(),
        "dateOfBirth": "2001-08-15",
        "address": _us_address(),
        "phone": _us_phone(),
        "email": f"peter+{TEST_RUN_ID}@oscorp.com",
        "ssn": "721074426",
        "tags": _base_tags(),
    }


# A business debit card is a physical card issued against a deposit account.
# Built via from_dict for the same oneOf-relationship reason as the fee
# fixtures above (data.relationships.account is the RelationshipData union).
def build_create_business_debit_card_request(account_id: str) -> CreateCardRequest:
    body = {
        "data": {
            "type": "businessDebitCard",
            "attributes": _card_holder(),
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
            },
        },
    }
    return CreateCardRequest(
        actual_instance=CreateBusinessDebitCardRequest.from_dict(body)
    )


# A business virtual debit card is issued Active immediately (physical cards
# land in `Inactive` until activated). Operations that require an Active card
# -- get_card_pin_status, report_card_lost, report_card_stolen -- therefore run
# against a virtual card. Virtual cards cannot be replaced (physical only).
def build_create_business_virtual_debit_card_request(
    account_id: str,
) -> CreateCardRequest:
    body = {
        "data": {
            "type": "businessVirtualDebitCard",
            "attributes": _card_holder(),
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
            },
        },
    }
    return CreateCardRequest(
        actual_instance=CreateBusinessVirtualDebitCardRequest.from_dict(body)
    )


# UpdateCardDataAttributes only exposes card-holder contact fields (tags are
# not updatable on a card), so the update touches the card holder's phone.
def build_update_card_request() -> UpdateCardRequest:
    body = {
        "data": {
            "type": "businessDebitCard",
            "attributes": {"phone": {"countryCode": "1", "number": "5555555556"}},
        },
    }
    return UpdateCardRequest.from_dict(body)


def build_freeze_card_request() -> FreezeCardRequest:
    body = {
        "data": {
            "type": "freezeCard",
            "attributes": {"reason": "SDK integration test freeze"},
        },
    }
    return FreezeCardRequest.from_dict(body)


def build_replace_card_request() -> ReplaceCardRequest:
    body = {
        "data": {
            "type": "replaceCard",
            "attributes": {"shippingAddress": _us_address()},
        },
    }
    return ReplaceCardRequest.from_dict(body)


def build_update_transaction_tags_request() -> UpdateTagsRequest:
    # PATCH /accounts/{accountId}/transactions/{transactionId} accepts a
    # generic tags-update envelope (``type: "transaction"``) regardless of the
    # underlying transaction variant. UpdateTagsData has no nested oneOf, so a
    # plain from_dict on the concrete request model is sufficient.
    body = {
        "data": {
            "type": "transaction",
            "attributes": {"tags": {**_base_tags(), "updated": "true"}},
        },
    }
    return UpdateTagsRequest.from_dict(body)


def build_update_book_transaction_request(account_id: str) -> UpdateTransactionRequest:
    # PATCH /transactions/{transactionId} is a oneOf union discriminated by
    # data.type; the bookTransaction variant requires the owning account
    # relationship (a RelationshipData oneOf) alongside the updatable
    # summary/tags attributes, so it is built via from_dict and wrapped as the
    # union's actual_instance (same pattern as the create fixtures above).
    body = {
        "data": {
            "type": "bookTransaction",
            "attributes": {
                "summary": "SDK integration test book transaction update",
                "tags": {**_base_tags(), "updated": "true"},
            },
            "relationships": {
                "account": {"data": {"type": "account", "id": account_id}},
            },
        },
    }
    return UpdateTransactionRequest(
        actual_instance=UpdateBookTransactionRequest.from_dict(body)
    )


# A business wallet customer is created directly (no application flow). The
# sandbox requires the full attribute set from the spec: bank partner name,
# business name, address, EIN, vertical and employee-count bucket. The request
# model is concrete (no nested oneOf), so a plain from_dict is sufficient.
def build_create_business_wallet_customer_request() -> CreateBusinessWalletCustomerRequest:
    body = {
        "data": {
            "type": "businessWalletCustomer",
            "attributes": {
                # bankName must be one of the sandbox's partner-bank names
                # (Piermont, Blue Ridge, Pacific West, MVB, Choice Financial
                # Group, Thread, Lincoln Savings, Emprise, TransPecos, Vantage).
                "bankName": "Thread",
                "businessName": f"Pied Piper Wallet {TEST_RUN_ID}",
                "address": _us_address(),
                "ein": "123456789",
                "businessVertical": "TechnologyMediaOrTelecom",
                "numberOfEmployees": "Between50And100",
                "tags": _base_tags(),
            },
        },
    }
    return CreateBusinessWalletCustomerRequest.from_dict(body)


# updateCustomer is a oneOf union discriminated by data.type; the
# businessCustomer variant only touches tags here so the shared business
# customer is left otherwise intact for downstream suites.
def build_update_business_customer_request() -> UpdateCustomerRequest:
    body = {
        "data": {
            "type": "businessCustomer",
            "attributes": {"tags": {**_base_tags(), "updated": "true"}},
        },
    }
    return UpdateCustomerRequest(
        actual_instance=UpdateBusinessCustomerRequest.from_dict(body)
    )


def build_archive_customer_request() -> ArchiveCustomerRequest:
    body = {
        "data": {
            "type": "customerArchive",
            "attributes": {"reason": "Inactive"},
        },
    }
    return ArchiveCustomerRequest.from_dict(body)


def build_update_business_customer_officer_request() -> UpdateBusinessCustomerOfficerRequest:
    body = {
        "data": {
            "type": "officer",
            "attributes": {"occupation": "ArchitectOrEngineer"},
        },
    }
    return UpdateBusinessCustomerOfficerRequest.from_dict(body)


# An ACH counterparty is an external bank account owned by one of our
# customers. The routing/account number pair has to resolve to a real bank, so
# the suite points the counterparty at one of the shared customer's own Unit
# deposit accounts (see ``helpers/counterparties.py``) rather than inventing an
# ABA number the sandbox would reject. ``createCounterparty`` takes a oneOf
# union body, so the concrete variant is wrapped as the union's
# ``actual_instance``.
def build_create_counterparty_request(
    customer_id: str,
    routing_number: str,
    account_number: str,
) -> CreateCounterpartyBody:
    body = {
        "data": {
            "type": "achCounterparty",
            "attributes": {
                "name": f"Peter Parker {TEST_RUN_ID}",
                "routingNumber": routing_number,
                "accountNumber": account_number,
                "accountType": "Checking",
                "type": "Business",
                "tags": _base_tags(),
                "idempotencyKey": f"{TEST_RUN_ID}-counterparty-{uuid.uuid4().hex[:8]}",
            },
            "relationships": {
                "customer": {"data": {"type": "customer", "id": customer_id}},
            },
        },
    }
    return CreateCounterpartyBody(
        actual_instance=CreateCounterpartyRequest.from_dict(body)
    )


# UpdateCounterpartyDataAttributes exposes plaid_processor_token, verify_name,
# permissions and tags. Only ``tags`` is safe for a non-Plaid counterparty: a
# relink needs a Plaid token we don't have, and permissions beyond the default
# CreditOnly depend on the counterparty's bank.
def build_update_counterparty_request() -> UpdateCounterpartyRequest:
    body = {
        "data": {
            "type": "counterparty",
            "attributes": {"tags": {**_base_tags(), "updated": "true"}},
        },
    }
    return UpdateCounterpartyRequest.from_dict(body)


# Credit applications have no ``tags`` attribute, so the run marker rides along
# in the free-form ``additionalUnderwritingData`` instead. ``lendingProgram`` is
# required and there is no list-lending-programs operation, so callers borrow an
# id off an existing credit application.
#
# ``idempotencyKey`` is omitted deliberately: the spec declares it on the create
# attributes, but the API answers 400 "Field 'idempotencyKey' is not expected".
# Spec defect owned by ``unit-openapi``.
def build_create_existing_credit_application_request(
    customer_id: str,
    lending_program_id: str,
) -> CreateCreditApplicationRequest:
    body = {
        "data": {
            "type": "createExistingCustomerCreditApplication",
            "attributes": {
                "annualIncome": 100000,
                "numberOfEmployees": "UpTo10",
                "yearsInBusiness": 4,
                "additionalUnderwritingData": _base_tags(),
            },
            "relationships": {
                "customer": {"data": {"type": "customer", "id": customer_id}},
                "lendingProgram": {
                    "data": {"type": "lendingProgram", "id": lending_program_id}
                },
            },
        },
    }
    return CreateCreditApplicationRequest(
        actual_instance=CreateExistingCreditApplicationRequest.from_dict(body)
    )


def build_update_credit_application_request() -> UpdateCreditApplicationRequest:
    body = {
        "data": {
            "type": "patchCreditApplication",
            "attributes": {
                "annualIncome": 120000,
                "numberOfEmployees": "UpTo10",
                "yearsInBusiness": 5,
                "additionalUnderwritingData": _base_tags(),
            },
        },
    }
    return UpdateCreditApplicationRequest.from_dict(body)


def build_create_approved_credit_limit_decision_request(
    credit_application_id: str,
) -> CreateCreditDecisionRequest:
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z"
    body = {
        "data": {
            "type": "approvedCreditLimitDecision",
            "attributes": {
                "externalApplicationId": f"{TEST_RUN_ID}-ext-app-{uuid.uuid4().hex[:8]}",
                "submissionTimestamp": now,
                "decisionTimestamp": now,
                "creditLimit": 1000000,
                "policyException": False,
                "policyExceptionReason": "",
                "additionalUnderwritingData": _base_tags(),
                "idempotencyKey": f"{TEST_RUN_ID}-credit-decision-{uuid.uuid4().hex[:8]}",
            },
            "relationships": {
                "creditApplication": {
                    "data": {
                        "type": "creditApplication",
                        "id": credit_application_id,
                    }
                },
            },
        },
    }
    return CreateCreditDecisionRequest(
        actual_instance=CreateApprovedCreditLimitDecisionRequest.from_dict(body)
    )


def build_add_account_owners_request(customer_ids: List[str]) -> Dict[str, Any]:
    return {
        "data": [{"type": "customer", "id": customer_id} for customer_id in customer_ids],
    }


def build_remove_account_owners_request(customer_ids: List[str]) -> Dict[str, Any]:
    return {
        "data": [{"type": "customer", "id": customer_id} for customer_id in customer_ids],
    }


def _unique_phone_number() -> str:
    return f"2{int(time.time() * 1000) % 10**9:09d}"[:10]


def build_authorized_user(overrides: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    unique = "".join(ch for ch in TEST_RUN_ID if ch.isalnum())[-8:] or "user"
    user = {
        "fullName": {"first": "Erlich", "last": f"Backman{unique}"},
        "email": f"erlich+{TEST_RUN_ID}@piedpiper.com",
        "phone": {"countryCode": "1", "number": _unique_phone_number()},
    }
    if overrides:
        user.update(overrides)
    return user


def build_add_authorized_users_request(
    users: Optional[List[Dict[str, Any]]] = None,
) -> AddAuthorizedUsersRequest:
    body = {
        "data": {
            "type": "addAuthorizedUsers",
            "attributes": {"authorizedUsers": users or [build_authorized_user()]},
        },
    }
    return AddAuthorizedUsersRequest.from_dict(body)


def build_remove_authorized_users_request(
    emails: List[str],
) -> RemoveAuthorizedUsersRequest:
    body = {
        "data": {
            "type": "removeAuthorizedUsers",
            "attributes": {"authorizedUsersEmails": emails},
        },
    }
    return RemoveAuthorizedUsersRequest.from_dict(body)


# CreatePolicy requires email/message outreach settings and a white-label
# theme that a plain sandbox org does not necessarily have. Tests pass
# placeholder relationship ids and treat a 4xx/5xx as feature-unavailable.
def build_create_policy_request(
    email_outreach_settings_id: str = "0",
    message_outreach_settings_id: str = "0",
    white_label_theme_id: str = "0",
) -> CreatePolicyRequest:
    body = {
        "data": {
            "type": "cardFraudOutreachPolicy",
            "attributes": {
                "contactPhone": _us_phone(),
                "contactUrl": "https://sdk-test.unit.co",
                "activitiesLookBackPeriodHours": 72,
                "caseExpirationPeriodHours": 72,
                "numberOfCardActivities": 3,
                "idempotencyKey": f"{TEST_RUN_ID}-fraud-policy-{uuid.uuid4().hex[:8]}",
            },
            "relationships": {
                "emailOutreachSettings": {
                    "data": {
                        "type": "emailOutreachSettings",
                        "id": email_outreach_settings_id,
                    }
                },
                "messageOutreachSettings": {
                    "data": {
                        "type": "messageOutreachSettings",
                        "id": message_outreach_settings_id,
                    }
                },
                "whiteLabelTheme": {
                    "data": {"type": "whiteLabelTheme", "id": white_label_theme_id}
                },
            },
        },
    }
    return CreatePolicyRequest.from_dict(body)


def build_update_policy_request() -> UpdatePolicyRequest:
    body = {
        "data": {
            "type": "cardFraudOutreachPolicy",
            "attributes": {"contactUrl": "https://sdk-test-updated.unit.co"},
        },
    }
    return UpdatePolicyRequest.from_dict(body)


def build_mark_card_fraud_case_as_fraud_request(
    fraudulent_activity_ids: List[int],
) -> MarkCardFraudCaseAsFraudRequest:
    body = {
        "data": {
            "type": "markAsFraudRequest",
            "attributes": {"fraudulentActivityIds": fraudulent_activity_ids},
        },
    }
    return MarkCardFraudCaseAsFraudRequest.from_dict(body)


def build_create_cardholder_token_verification_request() -> (
    CreateCardholderTokenVerificationRequest
):
    body = {
        "data": {
            "type": "cardholderTokenVerification",
            "attributes": {"channel": "sms"},
        },
    }
    return CreateCardholderTokenVerificationRequest.from_dict(body)


def build_create_cardholder_token_request(
    verification_token: str,
    verification_code: str = "000000",
) -> CreateCardholderTokenRequest:
    """Build a cardholder-token body.

    The spec marks ``verificationToken`` / ``verificationCode`` required even
    for the plain ``cards`` scope. The code is a 6-digit OTP delivered to the
    card holder out of band, so the suite can only send a placeholder.
    """
    body = {
        "data": {
            "type": "cardholderToken",
            "attributes": {
                "scope": "cards",
                "verificationToken": verification_token,
                "verificationCode": verification_code,
                "expiresIn": 3600,
            },
        },
    }
    return CreateCardholderTokenRequest.from_dict(body)


def build_get_mobile_wallet_payload_request(
    signed_nonce: str = "eyJle...",
) -> GetMobileWalletPayloadRequest:
    """Build a mobile-wallet payload body.

    ``signedNonce`` is issued by the Visa in-app SDK. The suite cannot mint
    one, so tests send the spec example and treat a 4xx as unavailable.
    """
    body = {
        "data": {
            "attributes": {"signedNonce": signed_nonce},
        },
    }
    return GetMobileWalletPayloadRequest.from_dict(body)


def build_update_daca_policies_request(account_id: str) -> Dict[str, Any]:
    """Body for the three DACA transitions.

    The spec declares the request body as an untyped, optional ``object``, but
    the API rejects a missing body with 400 ``invalid_fields`` and pins
    ``data.type`` to the constant ``updateDacaPoliciesRequest`` with a required
    ``account`` relationship. Spec defect owned by ``unit-openapi``: model this
    body instead of ``type: object``.
    """
    return {
        "data": {
            "type": "updateDacaPoliciesRequest",
            "relationships": {
                "account": {"data": {"type": "depositAccount", "id": account_id}},
            },
        },
    }
