# ApplicationDocumentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | One of Required, ReceivedBack, ReceivedFront, Invalid, Approved or PendingReview, see Application Document Status. | [default to undefined]
**documentType** | **string** | One of IdDocument, Passport, AddressVerification, CertificateOfIncorporation, EmployerIdentificationNumberConfirmation, SocialSecurityCard, ClientRequested or SelfieVerification. | [default to undefined]
**description** | **string** | The document requirements description. | [default to undefined]
**name** | **string** | Name of business or individual. | [default to undefined]
**address** | [**AddressType**](AddressType.md) | Individual address, present only for the AddressVerification document type. | [optional] [default to undefined]
**dateOfBirth** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). Present only for Passport and IdDocument document types. | [optional] [default to undefined]
**passport** | **string** | Individual passport number. Present only for the Passport document type. | [optional] [default to undefined]
**ein** | **string** | Business EIN. Present only for the EmployerIdentificationNumberConfirmation document type. | [optional] [default to undefined]
**reasonCode** | **string** | Application Document rejection reason code. Present only when document status is Invalid. One of PoorQuality, NameMismatch, SSNMismatch, AddressMismatch, DOBMismatch, ExpiredId, EINMismatch, StateMismatch, Other. | [optional] [default to undefined]
**reason** | **string** | Application Document rejection reason. Present only when document status is Invalid. | [optional] [default to undefined]
**archived** | **boolean** | When true , uploading a document is disabled. | [default to undefined]

## Example

```typescript
import { ApplicationDocumentAttributes } from 'unit-openapi-node-sdk';

const instance: ApplicationDocumentAttributes = {
    status,
    documentType,
    description,
    name,
    address,
    dateOfBirth,
    passport,
    ein,
    reasonCode,
    reason,
    archived,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
