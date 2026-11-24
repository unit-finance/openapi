# CancelPositivePay201ResponseData

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
from unit_finance_sdk.models.cancel_positive_pay201_response_data import CancelPositivePay201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CancelPositivePay201ResponseData from a JSON string
cancel_positive_pay201_response_data_instance = CancelPositivePay201ResponseData.from_json(json)
# print the JSON string representation of the object
print(CancelPositivePay201ResponseData.to_json())

# convert the object into a dict
cancel_positive_pay201_response_data_dict = cancel_positive_pay201_response_data_instance.to_dict()
# create an instance of CancelPositivePay201ResponseData from a dict
cancel_positive_pay201_response_data_from_dict = CancelPositivePay201ResponseData.from_dict(cancel_positive_pay201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


