# UpdateIndividualApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **{ [key: string]: any; }** | See Updating Tags. | [default to undefined]
**occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the individual. | [optional] [default to undefined]
**annualIncome** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the individual. | [optional] [default to undefined]
**sourceOfIncome** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the individual. | [optional] [default to undefined]

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
