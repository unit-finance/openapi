# CancelPayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CancelPayment200ResponseData**](CancelPayment200ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.cancel_payment200_response import CancelPayment200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CancelPayment200Response from a JSON string
cancel_payment200_response_instance = CancelPayment200Response.from_json(json)
# print the JSON string representation of the object
print(CancelPayment200Response.to_json())

# convert the object into a dict
cancel_payment200_response_dict = cancel_payment200_response_instance.to_dict()
# create an instance of CancelPayment200Response from a dict
cancel_payment200_response_from_dict = CancelPayment200Response.from_dict(cancel_payment200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


