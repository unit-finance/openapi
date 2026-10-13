# RecurringBookRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [optional] [default to undefined]
**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. | [default to undefined]
**description** | **string** | Repayment description (maximum of 80 characters). this will show up on the statement of the counterparty. | [default to undefined]
**transactionSummaryOverride** | **string** | If this field is populated, its contents will be returned as the bookTransaction\&#39;s summary field (maximum of 100 characters). | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]
**numberOfRepayments** | **number** | Represents the number of repayments that were created by this recurring payment. | [default to undefined]
**status** | **string** | Status of the recurring repayment, one of: Active, Disabled. | [default to undefined]

## Example

```typescript
import { RecurringBookRepaymentAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: RecurringBookRepaymentAttributes = {
    createdAt,
    updatedAt,
    schedule,
    description,
    transactionSummaryOverride,
    tags,
    numberOfRepayments,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
