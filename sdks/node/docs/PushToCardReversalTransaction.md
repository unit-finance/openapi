# PushToCardReversalTransaction

`PushToCardReversalTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**CashDepositTransactionAttributes**](CashDepositTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**PushToCardReversalTransactionRelationships**](PushToCardReversalTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PushToCardReversalTransaction } from '@unit-finance/unit-node-sdk';

const instance: PushToCardReversalTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
