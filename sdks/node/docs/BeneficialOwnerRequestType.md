# BeneficialOwnerRequestType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullName** | [**FullNameType**](FullNameType.md) | Full name of the beneficial owner. | [default to undefined]
**ssn** | **string** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] [default to undefined]
**passport** | **string** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] [default to undefined]
**nationality** | **string** | Required when passport is populated. Two letters representing the beneficial owner\&#39;s nationality. | [optional] [default to undefined]
**dateOfBirth** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). | [default to undefined]
**address** | [**AddressType**](AddressType.md) | The beneficial owner\&#39;s address. | [default to undefined]
**phone** | [**PhoneType**](PhoneType.md) | The beneficial owner\&#39;s phone number. | [default to undefined]
**email** | **string** | The beneficial owner\&#39;s email address. | [default to undefined]
**percentage** | **number** | The percentage of ownership of the beneficial owner (between 25 and 100). | [optional] [default to undefined]
**occupation** | **string** | Optional. Occupation of the beneficial owner. | [optional] [default to undefined]
**annualIncome** | **string** | Optional. Annual income of the beneficial owner. | [optional] [default to undefined]
**sourceOfIncome** | **string** | Optional. Source of income of the beneficial owner. | [optional] [default to undefined]

## Example

```typescript
import { BeneficialOwnerRequestType } from '@unit-finance/unit-node-sdk';

const instance: BeneficialOwnerRequestType = {
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
