# RecurringCreditBookPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [default to undefined]
**amount** | **number** | The amount (cents) of the payment. | [default to undefined]
**description** | **string** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. | [default to undefined]
**status** | **string** | Status of the recurring payment, one of: Active, Completed, Disabled, Deleted. | [default to undefined]
**numberOfPayments** | **number** | Represents the number of payments that were created by this recurring payment. | [default to undefined]
**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. | [default to undefined]
**transactionSummaryOverride** | **string** | If this field is populated, its contents will be returned as the bookTransaction\&#39;s summary field (maximum of 100 characters). | [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [default to undefined]

## Example

```typescript
import { RecurringCreditBookPaymentAttributes } from '@unit-finance/unit-node-sdk';

const instance: RecurringCreditBookPaymentAttributes = {
    createdAt,
    updatedAt,
    amount,
    description,
    status,
    numberOfPayments,
    schedule,
    transactionSummaryOverride,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
