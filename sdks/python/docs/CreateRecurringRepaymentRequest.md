# CreateRecurringRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateRecurringCapitalPartnerBookRepaymentData**](CreateRecurringCapitalPartnerBookRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_repayment_request import CreateRecurringRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringRepaymentRequest from a JSON string
create_recurring_repayment_request_instance = CreateRecurringRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringRepaymentRequest.to_json())

# convert the object into a dict
create_recurring_repayment_request_dict = create_recurring_repayment_request_instance.to_dict()
# create an instance of CreateRecurringRepaymentRequest from a dict
create_recurring_repayment_request_from_dict = CreateRecurringRepaymentRequest.from_dict(create_recurring_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


