# CreateRecurringACHRepaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateRecurringACHRepaymentDataAttributes**](CreateRecurringACHRepaymentDataAttributes.md) |  | 
**relationships** | [**CreateRecurringACHRepaymentDataRelationships**](CreateRecurringACHRepaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_ach_repayment_data import CreateRecurringACHRepaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringACHRepaymentData from a JSON string
create_recurring_ach_repayment_data_instance = CreateRecurringACHRepaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringACHRepaymentData.to_json())

# convert the object into a dict
create_recurring_ach_repayment_data_dict = create_recurring_ach_repayment_data_instance.to_dict()
# create an instance of CreateRecurringACHRepaymentData from a dict
create_recurring_ach_repayment_data_from_dict = CreateRecurringACHRepaymentData.from_dict(create_recurring_ach_repayment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


