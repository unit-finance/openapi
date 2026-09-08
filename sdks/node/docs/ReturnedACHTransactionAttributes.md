# ReturnedACHTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**companyName** | **string** | The name by which the originator is known to the receiver. | [default to undefined]
**counterpartyName** | **string** | The name of the party that originated the ACH payment. | [default to undefined]
**counterpartyRoutingNumber** | **string** | The routing number of the party that originated the ACH payment. | [default to undefined]
**reason** | **string** | The reason for the transaction return. See ACH return reasons. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { ReturnedACHTransactionAttributes } from '@unit-finance/unit-node-sdk';

const instance: ReturnedACHTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    companyName,
    counterpartyName,
    counterpartyRoutingNumber,
    reason,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
