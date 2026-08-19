# UpdateIndividualApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **{ [key: string]: any; }** | See Updating Tags. | [default to undefined]
**occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the individual. | [optional] [default to undefined]
**annualIncome** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the individual. | [optional] [default to undefined]
**sourceOfIncome** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the individual. | [optional] [default to undefined]

## Example

```typescript
import { UpdateIndividualApplicationDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: UpdateIndividualApplicationDataAttributes = {
    tags,
    occupation,
    annualIncome,
    sourceOfIncome,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
