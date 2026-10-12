# ACHStopPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**minAmount** | **number** | The amount (cents) above which a received ACH payments will be stopped. | [optional] [default to undefined]
**originatorName** | **Array&lt;string&gt;** | Array of originator names to look on a payment to stop. | [optional] [default to undefined]
**direction** | **string** | Debit only. | [default to undefined]
**expiration** | **string** | Expiration date fo the stop payment | [optional] [default to undefined]
**isMultiUse** | **boolean** |  | [optional] [default to undefined]
**description** | **string** |  | [default to undefined]
**disableReason** | **string** | One of Expired, Requested or PaymentStopped | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional, but **strongly recommended**. See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { ACHStopPaymentAttributes } from 'unit-openapi-node-sdk';

const instance: ACHStopPaymentAttributes = {
    createdAt,
    updatedAt,
    minAmount,
    originatorName,
    direction,
    expiration,
    isMultiUse,
    description,
    disableReason,
    idempotencyKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
