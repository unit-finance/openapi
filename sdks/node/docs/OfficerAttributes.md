# OfficerAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | One of Approved, Denied or PendingReview. | [default to undefined]
**fullName** | [**FullNameType**](FullNameType.md) | Full name of the officer. | [default to undefined]
**title** | **string** | Title of the officer. One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | [default to undefined]
**ssn** | **string** | SSN (or ITIN) of the officer (numbers only). Either an ssn or passport is required. | [optional] [default to undefined]
**passport** | **string** | Passport number of the officer. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] [default to undefined]
**nationality** | **string** | Required if a passport is used as the main ID and optional when ssn is used. Two letters representing the officer\&#39;s nationality. (e.g. \&quot;US\&quot;). | [optional] [default to undefined]
**dateOfBirth** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**AddressType**](AddressType.md) | The officer\&#39;s address. | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | The officer\&#39;s phone number. | [default to undefined]
**email** | **string** | The officer\&#39;s email address. | [default to undefined]
**occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the officer. | [optional] [default to undefined]
**annualIncome** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the officer. | [optional] [default to undefined]
**sourceOfIncome** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the officer. | [optional] [default to undefined]

## Example

```typescript
import { OfficerAttributes } from 'unit-openapi-node-sdk';

const instance: OfficerAttributes = {
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
    occupation,
    annualIncome,
    sourceOfIncome,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
