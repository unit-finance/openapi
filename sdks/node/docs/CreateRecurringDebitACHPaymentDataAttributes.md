# CreateRecurringDebitACHPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount (in cents). | [default to undefined]
**description** | **string** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on the statement of the counterparty. | [default to undefined]
**addenda** | **string** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] [default to undefined]
**schedule** | [**CreateScheduleType**](CreateScheduleType.md) | The schedule details of the recurring payment. All times must be in the future. | [default to undefined]
**verifyCounterpartyBalance** | **boolean** | Optional, default is false. Verify the counterparty balance, if balance verification fails the payment will be rejected with reason set to CounterpartyInsufficientFunds. | [optional] [default to undefined]
**sameDay** | **boolean** | Optional, default is false. See Same Day ACH. | [optional] [default to undefined]
**idempotencyKey** | **string** | Optional. See Idempotency. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]

## Example

```typescript
import { CreateRecurringDebitACHPaymentDataAttributes } from 'unit-openapi-node-sdk';

const instance: CreateRecurringDebitACHPaymentDataAttributes = {
    amount,
    description,
    addenda,
    schedule,
    verifyCounterpartyBalance,
    sameDay,
    idempotencyKey,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
