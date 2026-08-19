# UpdateBusinessBeneficialOwnerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the beneficial owner. | [optional] [default to undefined]
**annualIncome** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the beneficial owner. | [optional] [default to undefined]
**sourceOfIncome** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the beneficial owner. | [optional] [default to undefined]
**percentage** | **string** | Optional. The beneficial owner percentage of ownership at the business (between 25 and 100). | [optional] [default to undefined]

## Example

```typescript
import { UpdateBusinessBeneficialOwnerDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: UpdateBusinessBeneficialOwnerDataAttributes = {
    occupation,
    annualIncome,
    sourceOfIncome,
    percentage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
