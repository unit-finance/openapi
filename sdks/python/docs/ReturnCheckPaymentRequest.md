# ReturnCheckPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ReturnCheckPaymentData**](ReturnCheckPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.return_check_payment_request import ReturnCheckPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnCheckPaymentRequest from a JSON string
return_check_payment_request_instance = ReturnCheckPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(ReturnCheckPaymentRequest.to_json())

# convert the object into a dict
return_check_payment_request_dict = return_check_payment_request_instance.to_dict()
# create an instance of ReturnCheckPaymentRequest from a dict
return_check_payment_request_from_dict = ReturnCheckPaymentRequest.from_dict(return_check_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


