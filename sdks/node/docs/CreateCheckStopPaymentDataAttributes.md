# CreateCheckStopPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents) to look on payments to stop. | [optional] [default to undefined]
**checkNumber** | **string** | The check number to look on a check payment to stop. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional, but **strongly recommended**. See Idempotency. | [optional] [default to undefined]

## Example

```typescript
import { CreateCheckStopPaymentDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateCheckStopPaymentDataAttributes = {
    amount,
    checkNumber,
    tags,
    idempotencyKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
