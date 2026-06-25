# List200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BusinessApplicationAttributes**](BusinessApplicationAttributes.md) |  | 
**relationships** | [**BusinessApplicationRelationships**](BusinessApplicationRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list200_response_data_inner import List200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of List200ResponseDataInner from a JSON string
list200_response_data_inner_instance = List200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(List200ResponseDataInner.to_json())

# convert the object into a dict
list200_response_data_inner_dict = list200_response_data_inner_instance.to_dict()
# create an instance of List200ResponseDataInner from a dict
list200_response_data_inner_from_dict = List200ResponseDataInner.from_dict(list200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


