# CreateReceivedACHDebitPositivePayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateReceivedACHDebitPositivePayData**](CreateReceivedACHDebitPositivePayData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_received_ach_debit_positive_pay_request import CreateReceivedACHDebitPositivePayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReceivedACHDebitPositivePayRequest from a JSON string
create_received_ach_debit_positive_pay_request_instance = CreateReceivedACHDebitPositivePayRequest.from_json(json)
# print the JSON string representation of the object
print(CreateReceivedACHDebitPositivePayRequest.to_json())

# convert the object into a dict
create_received_ach_debit_positive_pay_request_dict = create_received_ach_debit_positive_pay_request_instance.to_dict()
# create an instance of CreateReceivedACHDebitPositivePayRequest from a dict
create_received_ach_debit_positive_pay_request_from_dict = CreateReceivedACHDebitPositivePayRequest.from_dict(create_received_ach_debit_positive_pay_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


