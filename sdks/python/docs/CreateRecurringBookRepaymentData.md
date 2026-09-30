# CreateRecurringBookRepaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateRecurringBookRepaymentDataAttributes**](CreateRecurringBookRepaymentDataAttributes.md) |  | 
**relationships** | [**CreateRecurringBookRepaymentDataRelationships**](CreateRecurringBookRepaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_book_repayment_data import CreateRecurringBookRepaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringBookRepaymentData from a JSON string
create_recurring_book_repayment_data_instance = CreateRecurringBookRepaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringBookRepaymentData.to_json())

# convert the object into a dict
create_recurring_book_repayment_data_dict = create_recurring_book_repayment_data_instance.to_dict()
# create an instance of CreateRecurringBookRepaymentData from a dict
create_recurring_book_repayment_data_from_dict = CreateRecurringBookRepaymentData.from_dict(create_recurring_book_repayment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


