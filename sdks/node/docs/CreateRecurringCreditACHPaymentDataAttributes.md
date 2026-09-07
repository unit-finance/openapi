# CreateRecurringCreditACHPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents). | [default to undefined]
**description** | **string** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on the statement of the counterparty. | [default to undefined]
**addenda** | **string** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] [default to undefined]
**schedule** | [**CreateScheduleType**](CreateScheduleType.md) | The schedule details of the recurring payment. All times must be in the future. | [default to undefined]
**sameDay** | **boolean** | Optional, default is false. See Same Day ACH. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { CreateRecurringCreditACHPaymentDataAttributes } from '@unit-finance/unit-node-sdk';

const instance: CreateRecurringCreditACHPaymentDataAttributes = {
    amount,
    description,
    addenda,
    schedule,
    sameDay,
    idempotencyKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
