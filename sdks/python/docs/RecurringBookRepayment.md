# RecurringBookRepayment

`recurringBookRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RecurringBookRepaymentAttributes**](RecurringBookRepaymentAttributes.md) |  | 
**relationships** | [**RecurringBookRepaymentRelationships**](RecurringBookRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_book_repayment import RecurringBookRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringBookRepayment from a JSON string
recurring_book_repayment_instance = RecurringBookRepayment.from_json(json)
# print the JSON string representation of the object
print(RecurringBookRepayment.to_json())

# convert the object into a dict
recurring_book_repayment_dict = recurring_book_repayment_instance.to_dict()
# create an instance of RecurringBookRepayment from a dict
recurring_book_repayment_from_dict = RecurringBookRepayment.from_dict(recurring_book_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


