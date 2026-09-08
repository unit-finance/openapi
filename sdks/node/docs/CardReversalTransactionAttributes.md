# CardReversalTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**cardLast4Digits** | **string** | The last 4 digits of the debit card involved in the transaction. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { CardReversalTransactionAttributes } from '@unit-finance/unit-node-sdk';

const instance: CardReversalTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    cardLast4Digits,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
