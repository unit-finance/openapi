# WirePaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | Either Pending, Returned, Sent, Canceled or Rejected (see reason for details). | [default to undefined]
**reason** | **string** | Optional. More information about the status. | [optional] [default to undefined]
**direction** | **string** | The direction in which the funds flow (Credit only). | [default to undefined]
**description** | **string** | Payment description (maximum of 50 characters), this will show up on statement of the counterparty. | [default to undefined]
**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The beneficiary party on the other end of the payment. | [default to undefined]
**amount** | **number** | The amount (cents) of the payment. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]
**imadOmad** | **{ [key: string]: any; }** | (Conditional) IMAD/OMAD - Input/Output Message Accountability Data. It\&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. | [optional] [default to undefined]

## Example

```typescript
import { WirePaymentAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: WirePaymentAttributes = {
    createdAt,
    status,
    reason,
    direction,
    description,
    counterparty,
    amount,
    tags,
    imadOmad,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
