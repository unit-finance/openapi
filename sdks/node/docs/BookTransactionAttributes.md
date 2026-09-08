# BookTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Inherited from the payment tags (see Tag Inheritance). | [default to undefined]

## Example

```typescript
import { BookTransactionAttributes } from '@unit-finance/unit-node-sdk';

const instance: BookTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    counterparty,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
