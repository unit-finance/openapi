# UnitFinanceSdk::ApplicationDocumentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | One of Required, ReceivedBack, ReceivedFront, Invalid, Approved or PendingReview, see Application Document Status. |  |
| **document_type** | **String** | One of IdDocument, Passport, AddressVerification, CertificateOfIncorporation, EmployerIdentificationNumberConfirmation, SocialSecurityCard, ClientRequested or SelfieVerification. |  |
| **description** | **String** | The document requirements description. |  |
| **name** | **String** | Name of business or individual. |  |
| **address** | [**AddressType**](AddressType.md) | Individual address, present only for the AddressVerification document type. | [optional] |
| **date_of_birth** | **Date** | Date only (e.g. \&quot;2001-08-15\&quot;). Present only for Passport and IdDocument document types. | [optional] |
| **passport** | **String** | Individual passport number. Present only for the Passport document type. | [optional] |
| **ein** | **String** | Business EIN. Present only for the EmployerIdentificationNumberConfirmation document type. | [optional] |
| **reason_code** | **String** | Application Document rejection reason code. Present only when document status is Invalid. One of PoorQuality, NameMismatch, SSNMismatch, AddressMismatch, DOBMismatch, ExpiredId, EINMismatch, StateMismatch, Other. | [optional] |
| **reason** | **String** | Application Document rejection reason. Present only when document status is Invalid. | [optional] |
| **archived** | **Boolean** | When true , uploading a document is disabled. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ApplicationDocumentAttributes.new(
  status: null,
  document_type: null,
  description: null,
  name: null,
  address: null,
  date_of_birth: null,
  passport: null,
  ein: null,
  reason_code: null,
  reason: null,
  archived: null
)
```

