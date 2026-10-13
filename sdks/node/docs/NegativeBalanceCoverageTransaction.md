# NegativeBalanceCoverageTransaction

`negativeBalanceCoverageTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NegativeBalanceCoverageTransaction } from '@unit-finance/unit-openapi-node-sdk';

const instance: NegativeBalanceCoverageTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
