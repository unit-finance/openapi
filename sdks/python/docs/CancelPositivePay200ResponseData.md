# CancelPositivePay200ResponseData

The cancelled Positive Pay rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WireDrawdownPositivePayAttributes**](WireDrawdownPositivePayAttributes.md) |  | 
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.cancel_positive_pay200_response_data import CancelPositivePay200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CancelPositivePay200ResponseData from a JSON string
cancel_positive_pay200_response_data_instance = CancelPositivePay200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CancelPositivePay200ResponseData.to_json())

# convert the object into a dict
cancel_positive_pay200_response_data_dict = cancel_positive_pay200_response_data_instance.to_dict()
# create an instance of CancelPositivePay200ResponseData from a dict
cancel_positive_pay200_response_data_from_dict = CancelPositivePay200ResponseData.from_dict(cancel_positive_pay200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


