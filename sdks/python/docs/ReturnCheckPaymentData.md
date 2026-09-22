# ReturnCheckPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**ReturnCheckPaymentDataAttributes**](ReturnCheckPaymentDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.return_check_payment_data import ReturnCheckPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnCheckPaymentData from a JSON string
return_check_payment_data_instance = ReturnCheckPaymentData.from_json(json)
# print the JSON string representation of the object
print(ReturnCheckPaymentData.to_json())

# convert the object into a dict
return_check_payment_data_dict = return_check_payment_data_instance.to_dict()
# create an instance of ReturnCheckPaymentData from a dict
return_check_payment_data_from_dict = ReturnCheckPaymentData.from_dict(return_check_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


