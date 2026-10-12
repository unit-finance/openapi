# ReturnedCheckPaymentTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**returnReason** | **string** | The reason for the transaction return. This is a replacement to the deprecated reason attribute. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { ReturnedCheckPaymentTransactionAttributes } from 'unit-openapi-node-sdk';

const instance: ReturnedCheckPaymentTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    returnReason,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
