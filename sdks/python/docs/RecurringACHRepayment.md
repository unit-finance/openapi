# RecurringACHRepayment

`recurringAchRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RecurringACHRepaymentAttributes**](RecurringACHRepaymentAttributes.md) |  | 
**relationships** | [**RecurringACHRepaymentRelationships**](RecurringACHRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_ach_repayment import RecurringACHRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringACHRepayment from a JSON string
recurring_ach_repayment_instance = RecurringACHRepayment.from_json(json)
# print the JSON string representation of the object
print(RecurringACHRepayment.to_json())

# convert the object into a dict
recurring_ach_repayment_dict = recurring_ach_repayment_instance.to_dict()
# create an instance of RecurringACHRepayment from a dict
recurring_ach_repayment_from_dict = RecurringACHRepayment.from_dict(recurring_ach_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


