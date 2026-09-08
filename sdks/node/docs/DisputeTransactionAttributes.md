# DisputeTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**disputeId** | **string** | Unique ID of the dispute that is related to the transaction. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**reason** | **string** | The reason for the dispute transaction, one of: ProvisionalCredit, ProvisionalCreditReversalDenied, ProvisionalCreditReversalResolved, FinalCredit. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { DisputeTransactionAttributes } from '@unit-finance/unit-node-sdk';

const instance: DisputeTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    disputeId,
    summary,
    reason,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
