# ListPositivePay200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WireDrawdownPositivePayAttributes**](WireDrawdownPositivePayAttributes.md) |  | 
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_positive_pay200_response_data_inner import ListPositivePay200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListPositivePay200ResponseDataInner from a JSON string
list_positive_pay200_response_data_inner_instance = ListPositivePay200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListPositivePay200ResponseDataInner.to_json())

# convert the object into a dict
list_positive_pay200_response_data_inner_dict = list_positive_pay200_response_data_inner_instance.to_dict()
# create an instance of ListPositivePay200ResponseDataInner from a dict
list_positive_pay200_response_data_inner_from_dict = ListPositivePay200ResponseDataInner.from_dict(list_positive_pay200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


