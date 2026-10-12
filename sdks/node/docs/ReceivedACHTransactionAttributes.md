# ReceivedACHTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**description** | **string** | Transaction description. | [default to undefined]
**addenda** | **string** | Additional transaction description (maximum of 50 characters). | [optional] [default to undefined]
**companyName** | **string** | The name by which the originator is known to the receiver. | [default to undefined]
**counterpartyRoutingNumber** | **string** | The routing number of the party that originated the ACH payment. | [default to undefined]
**traceNumber** | **string** | The ACH Trace Number. | [default to undefined]
**secCode** | **string** | The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { ReceivedACHTransactionAttributes } from 'unit-openapi-node-sdk';

const instance: ReceivedACHTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    description,
    addenda,
    companyName,
    counterpartyRoutingNumber,
    traceNumber,
    secCode,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
