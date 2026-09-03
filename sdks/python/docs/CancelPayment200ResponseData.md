# CancelPayment200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WirePaymentAttributes**](WirePaymentAttributes.md) |  | 
**relationships** | [**WirePaymentRelationships**](WirePaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.cancel_payment200_response_data import CancelPayment200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CancelPayment200ResponseData from a JSON string
cancel_payment200_response_data_instance = CancelPayment200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CancelPayment200ResponseData.to_json())

# convert the object into a dict
cancel_payment200_response_data_dict = cancel_payment200_response_data_instance.to_dict()
# create an instance of CancelPayment200ResponseData from a dict
cancel_payment200_response_data_from_dict = CancelPayment200ResponseData.from_dict(cancel_payment200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


