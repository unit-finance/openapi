# RewardTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types, this will be the description of the reward. | [default to undefined]
**receiverCounterparty** | [**CounterpartyType**](CounterpartyType.md) | The receiving party of the transaction. Available only when the receiving party is a Deposit Account. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Inherited from the payment tags (see Tag Inheritance). | [default to undefined]

## Example

```typescript
import { RewardTransactionAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: RewardTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    receiverCounterparty,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
