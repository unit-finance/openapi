# DishonoredACHTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**description** | **string** | Transaction description. | [default to undefined]
**companyName** | **string** | The name by which the originator is known to the receiver. | [default to undefined]
**counterpartyRoutingNumber** | **string** | The routing number of the party that originated the ACH payment. | [default to undefined]
**traceNumber** | **string** | The ACH Trace Number. | [default to undefined]
**reason** | **string** | The reason for the dishonored return. | [default to undefined]
**secCode** | **string** | The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { DishonoredACHTransactionAttributes } from '@unit-finance/unit-node-sdk';

const instance: DishonoredACHTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    description,
    companyName,
    counterpartyRoutingNumber,
    traceNumber,
    reason,
    secCode,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
