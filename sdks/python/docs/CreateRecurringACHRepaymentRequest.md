# CreateRecurringACHRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateRecurringACHRepaymentData**](CreateRecurringACHRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_ach_repayment_request import CreateRecurringACHRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringACHRepaymentRequest from a JSON string
create_recurring_ach_repayment_request_instance = CreateRecurringACHRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringACHRepaymentRequest.to_json())

# convert the object into a dict
create_recurring_ach_repayment_request_dict = create_recurring_ach_repayment_request_instance.to_dict()
# create an instance of CreateRecurringACHRepaymentRequest from a dict
create_recurring_ach_repayment_request_from_dict = CreateRecurringACHRepaymentRequest.from_dict(create_recurring_ach_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


