# MetaPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 

## Example

```python
from unit_finance_sdk.models.meta_pagination import MetaPagination

# TODO update the JSON string below
json = "{}"
# create an instance of MetaPagination from a JSON string
meta_pagination_instance = MetaPagination.from_json(json)
# print the JSON string representation of the object
print(MetaPagination.to_json())

# convert the object into a dict
meta_pagination_dict = meta_pagination_instance.to_dict()
# create an instance of MetaPagination from a dict
meta_pagination_from_dict = MetaPagination.from_dict(meta_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


