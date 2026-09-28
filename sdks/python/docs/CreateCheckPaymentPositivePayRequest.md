# CreateCheckPaymentPositivePayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCheckPaymentPositivePayData**](CreateCheckPaymentPositivePayData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_payment_positive_pay_request import CreateCheckPaymentPositivePayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckPaymentPositivePayRequest from a JSON string
create_check_payment_positive_pay_request_instance = CreateCheckPaymentPositivePayRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCheckPaymentPositivePayRequest.to_json())

# convert the object into a dict
create_check_payment_positive_pay_request_dict = create_check_payment_positive_pay_request_instance.to_dict()
# create an instance of CreateCheckPaymentPositivePayRequest from a dict
create_check_payment_positive_pay_request_from_dict = CreateCheckPaymentPositivePayRequest.from_dict(create_check_payment_positive_pay_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


