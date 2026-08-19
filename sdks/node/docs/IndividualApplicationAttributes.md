# IndividualApplicationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | One of AwaitingDocuments, PendingReview, Approved, Denied or Pending, see Application Statuses. | [default to undefined]
**message** | **string** | A message describing the IndividualApplication status. | [default to undefined]
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | Optional. The date the resource was updated. | [optional] [default to undefined]
**ssn** | **string** | SSN of the individual (numbers only). Either ssn or passport will be populated. | [optional] [default to undefined]
**passport** | **string** | Individual passport number. Either ssn or passport will be populated. | [optional] [default to undefined]
**nationality** | **string** | Always when Passport is populated and optional when SSN is populated. Two letters representing the individual nationality (e.g. \&quot;US\&quot;). | [optional] [default to undefined]
**fullName** | [**FullName**](FullName.md) | Full name of the individual. | [default to undefined]
**dateOfBirth** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**Address**](Address.md) | Address of the individual. | [default to undefined]
**phone** | [**Phone**](Phone.md) | Phone of the individual. | [default to undefined]
**email** | **string** | Email address of the individual. | [default to undefined]
**ip** | **string** | IP address of the end-customer creating the application, if specified. | [optional] [default to undefined]
**soleProprietorship** | **boolean** | Optional. Indicates whether the individual is a sole proprietor, if specified. | [optional] [default to undefined]
**ein** | **string** | Optional. Indicates if the individual is a sole proprietor who has an Employer Identification Number, if specified. | [optional] [default to undefined]
**industry** | [**Industry**](Industry.md) | Optional. Indicates if the individual is a sole proprietor who has a business industry, if specified. | [optional] [default to undefined]
**dba** | **string** | Optional. Indicates if the individual is a sole proprietor who is doing business under a different name, if specified. | [optional] [default to undefined]
**archived** | **boolean** | Indicates whether the application has been archived. Archived applications are read-only and no changes can be made to them. Once an application has been archived, a new application with the same SSN (or Passport) may be submitted. An application becomes archived once the corresponding customer is archived. | [default to undefined]
**idTheftScore** | **number** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { IndividualApplicationAttributes } from '@unit-finance/unit-node-sdk';

const instance: IndividualApplicationAttributes = {
    status,
    message,
    createdAt,
    updatedAt,
    ssn,
    passport,
    nationality,
    fullName,
    dateOfBirth,
    address,
    phone,
    email,
    ip,
    soleProprietorship,
    ein,
    industry,
    dba,
    archived,
    idTheftScore,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
