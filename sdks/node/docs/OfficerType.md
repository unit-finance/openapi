# OfficerType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | One of Approved, Denied or PendingReview. | [default to undefined]
**fullName** | [**FullNameType**](FullNameType.md) | Full name of the officer. | [default to undefined]
**title** | **string** | One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | [default to undefined]
**ssn** | **string** | SSN of the officer (numbers only). One of ssn or passport is required. | [optional] [default to undefined]
**passport** | **string** | Passport of the officer. One of ssn or passport is required. | [optional] [default to undefined]
**nationality** | **string** | Always when Passport is populated and optional when SSN is populated. Two letters representing the officer\&#39;s nationality. | [optional] [default to undefined]
**dateOfBirth** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**AddressType**](AddressType.md) | The officer\&#39;s address. | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | The officer\&#39;s phone number. | [default to undefined]
**email** | **string** | The officer\&#39;s email address. | [default to undefined]
**idTheftScore** | **number** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). | [optional] [default to undefined]
**occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the officer. | [optional] [default to undefined]
**annualIncome** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the officer. | [optional] [default to undefined]
**sourceOfIncome** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the officer. | [optional] [default to undefined]

## Example

```typescript
import { OfficerType } from 'unit-openapi-node-sdk';

const instance: OfficerType = {
    status,
    fullName,
    title,
    ssn,
    passport,
    nationality,
    dateOfBirth,
    address,
    phone,
    email,
    idTheftScore,
    occupation,
    annualIncome,
    sourceOfIncome,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
