# OriginatedACHTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all transaction types. | [default to undefined]
**direction** | **string** | The direction in which the funds flow. Common to all transaction types. | [default to undefined]
**amount** | **number** | The amount (cents) of the transaction. Common to all transaction types. | [default to undefined]
**balance** | **number** | The account balance (cents) after the transaction. Common to all transaction types. | [default to undefined]
**summary** | **string** | Summary of the transaction. Common to all transaction types. | [default to undefined]
**description** | **string** | Transaction description. | [default to undefined]
**addenda** | **string** | Optional, additional transaction description. | [default to undefined]
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction. | [default to undefined]
**secCode** | **string** | The 3-letter ACH Standard Entry Class (SEC) Code. One of WEB, CCD, PPD. | [default to undefined]
**traceNumber** | **string** | The 15-digit ACH Trace Number identifies the transaction within the ACH file after transmission. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Inherited from the payment tags (see Tag Inheritance). | [default to undefined]

## Example

```typescript
import { OriginatedACHTransactionAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: OriginatedACHTransactionAttributes = {
    createdAt,
    direction,
    amount,
    balance,
    summary,
    description,
    addenda,
    counterparty,
    secCode,
    traceNumber,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
