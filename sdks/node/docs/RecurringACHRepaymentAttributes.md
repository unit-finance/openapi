# RecurringACHRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**updatedAt** | **string** | The date the resource was updated. | [optional] [default to undefined]
**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. | [default to undefined]
**description** | **string** | Repayment description (maximum of 50 characters). this will show up on the statement of the counterparty. | [default to undefined]
**addenda** | **string** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] [default to undefined]
**sameDay** | **boolean** | Optional, default is false. See Same Day ACH. | [optional] [default to undefined]
**secCode** | **string** | See Use a custom SEC Code. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] [default to undefined]
**numberOfRepayments** | **number** | Represents the number of repayments that were created by this recurring payment. | [default to undefined]
**status** | **string** | Status of the recurring repayment, one of: Active, Disabled. | [default to undefined]

## Example

```typescript
import { RecurringACHRepaymentAttributes } from 'unit-openapi-node-sdk';

const instance: RecurringACHRepaymentAttributes = {
    createdAt,
    updatedAt,
    schedule,
    description,
    addenda,
    sameDay,
    secCode,
    tags,
    numberOfRepayments,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
