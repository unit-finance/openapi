# ReturnedWireTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**reason** | **string** | The reason for the return. | [default to undefined]
**imad** | **string** | Input Message Accountability Data. It\&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. | [default to undefined]
**omad** | **string** | Output Message Accountability Data. It\&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { ReturnedWireTransactionAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: ReturnedWireTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    reason,
    imad,
    omad,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
