# RecurringACHRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | [optional] 
**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. | 
**description** | **str** | Repayment description (maximum of 50 characters). this will show up on the statement of the counterparty. | 
**addenda** | **str** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] 
**same_day** | **bool** | Optional, default is false. See Same Day ACH. | [optional] 
**sec_code** | **str** | See Use a custom SEC Code. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 
**number_of_repayments** | **int** | Represents the number of repayments that were created by this recurring payment. | 
**status** | **str** | Status of the recurring repayment, one of: Active, Disabled. | 

## Example

```python
from unit_finance_sdk.models.recurring_ach_repayment_attributes import RecurringACHRepaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringACHRepaymentAttributes from a JSON string
recurring_ach_repayment_attributes_instance = RecurringACHRepaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(RecurringACHRepaymentAttributes.to_json())

# convert the object into a dict
recurring_ach_repayment_attributes_dict = recurring_ach_repayment_attributes_instance.to_dict()
# create an instance of RecurringACHRepaymentAttributes from a dict
recurring_ach_repayment_attributes_from_dict = RecurringACHRepaymentAttributes.from_dict(recurring_ach_repayment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


