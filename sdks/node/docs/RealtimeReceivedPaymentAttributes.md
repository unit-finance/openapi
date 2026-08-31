# RealtimeReceivedPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the received payment was created. Common to all receive payment types. | [default to undefined]
**status** | **string** | The status of the Received Payment. One of Pending, Completed, Returned, Rejected, or TimedOut. See Received Payment Statuses. | [default to undefined]
**amount** | **number** | The amount (cents) of the RTP received payment. | [default to undefined]
**description** | **string** | Payment description / remittance information. | [default to undefined]
**counterparty** | [**RealTimeCounterpartyType**](RealTimeCounterpartyType.md) | The party on the other end of the transaction. For RTP received payments, this is always the originator (in ISO20022 terminology this is referred to as the Debtor). | [default to undefined]
**returnReason** | **string** | Present when status is Returned. See RTP return reasons. | [optional] [default to undefined]
**rejectReason** | **string** | Present when status is Rejected. See RTP reject reasons. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { RealtimeReceivedPaymentAttributes } from '@unit-finance/unit-node-sdk';

const instance: RealtimeReceivedPaymentAttributes = {
    createdAt,
    status,
    amount,
    description,
    counterparty,
    returnReason,
    rejectReason,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
