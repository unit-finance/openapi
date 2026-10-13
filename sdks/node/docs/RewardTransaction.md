# RewardTransaction

A `rewardTransaction` represents a successful reward creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**RewardTransactionAttributes**](RewardTransactionAttributes.md) |  | [default to undefined]
**relationships** | [**RewardTransactionRelationships**](RewardTransactionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RewardTransaction } from '@unit-finance/unit-openapi-node-sdk';

const instance: RewardTransaction = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
