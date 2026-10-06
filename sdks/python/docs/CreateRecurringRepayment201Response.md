# CreateRecurringRepayment201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListRecurringRepayments200ResponseDataInner**](ListRecurringRepayments200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_repayment201_response import CreateRecurringRepayment201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringRepayment201Response from a JSON string
create_recurring_repayment201_response_instance = CreateRecurringRepayment201Response.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringRepayment201Response.to_json())

# convert the object into a dict
create_recurring_repayment201_response_dict = create_recurring_repayment201_response_instance.to_dict()
# create an instance of CreateRecurringRepayment201Response from a dict
create_recurring_repayment201_response_from_dict = CreateRecurringRepayment201Response.from_dict(create_recurring_repayment201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


