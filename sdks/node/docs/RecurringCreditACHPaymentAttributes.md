# RecurringCreditACHPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**amount** | **number** | The amount (cents) of the payment. | [default to undefined]
**description** | **string** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | [default to undefined]
**addenda** | **string** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] [default to undefined]
**status** | **string** | Status of the recurring payment, one of: Active, Completed, Disabled, Deleted. | [default to undefined]
**numberOfPayments** | **number** | Represents the number of payments that were created by this recurring payment. | [default to undefined]
**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { RecurringCreditACHPaymentAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: RecurringCreditACHPaymentAttributes = {
    createdAt,
    updatedAt,
    amount,
    description,
    addenda,
    status,
    numberOfPayments,
    schedule,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
