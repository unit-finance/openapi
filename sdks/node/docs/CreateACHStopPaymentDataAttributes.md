# CreateACHStopPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minAmount** | **number** | The amount (in cents) above which a payment will be stopped. At least one originatorName or minAmount must be provided. | [optional] [default to undefined]
**originatorName** | **Array&lt;string&gt;** | The name of the originator of the payment to look for in payments to stop. At least one originatorName or minAmount must be provided. See guide for further details. | [optional] [default to undefined]
**direction** | **string** | Debit only. | [default to undefined]
**expiration** | **string** | Date only (e.g. \&quot;2001-08-15\&quot;). | [optional] [default to undefined]
**isMultiUse** | **boolean** | Available only for ACH Stop Payments. False by default. | [optional] [default to undefined]
**description** | **string** | Up to 255 characters | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional, but **strongly recommended**. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateACHStopPaymentDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateACHStopPaymentDataAttributes = {
    minAmount,
    originatorName,
    direction,
    expiration,
    isMultiUse,
    description,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
