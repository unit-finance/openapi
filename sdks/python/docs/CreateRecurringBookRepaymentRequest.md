# CreateRecurringBookRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateRecurringBookRepaymentData**](CreateRecurringBookRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_book_repayment_request import CreateRecurringBookRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringBookRepaymentRequest from a JSON string
create_recurring_book_repayment_request_instance = CreateRecurringBookRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringBookRepaymentRequest.to_json())

# convert the object into a dict
create_recurring_book_repayment_request_dict = create_recurring_book_repayment_request_instance.to_dict()
# create an instance of CreateRecurringBookRepaymentRequest from a dict
create_recurring_book_repayment_request_from_dict = CreateRecurringBookRepaymentRequest.from_dict(create_recurring_book_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


