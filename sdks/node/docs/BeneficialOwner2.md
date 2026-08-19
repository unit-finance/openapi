# BeneficialOwner2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | One of Approved, Denied or PendingReview. | [default to undefined]
**fullName** | [**FullName**](FullName.md) | Full name of the beneficial owner. | [default to undefined]
**ssn** | **string** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] [default to undefined]
**passport** | **string** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] [default to undefined]
**nationality** | **string** | Always when Passport is populated and optional when SSN is populated. Two letters representing the beneficial owner\&#39;s nationality. | [optional] [default to undefined]
**dateOfBirth** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**Address**](Address.md) | The beneficial owner\&#39;s address. | [default to undefined]
**phone** | [**Phone**](Phone.md) | The beneficial owner\&#39;s phone number. | [default to undefined]
**email** | **string** | The beneficial owner\&#39;s email address. | [default to undefined]
**percentage** | **number** | The percentage of ownership of the beneficial owner. | [optional] [default to undefined]
**occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the beneficial owner. | [optional] [default to undefined]
**annualIncome** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the beneficial owner. | [optional] [default to undefined]
**sourceOfIncome** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the beneficial owner. | [optional] [default to undefined]

## Example

```typescript
import { BeneficialOwner2 } from '@unit-finance/unit-node-sdk';

const instance: BeneficialOwner2 = {
    status,
    fullName,
    ssn,
    passport,
    nationality,
    dateOfBirth,
    address,
    phone,
    email,
    percentage,
    occupation,
    annualIncome,
    sourceOfIncome,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
