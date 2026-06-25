# List200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[List200ResponseDataInner]**](List200ResponseDataInner.md) |  | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list200_response import List200Response

# TODO update the JSON string below
json = "{}"
# create an instance of List200Response from a JSON string
list200_response_instance = List200Response.from_json(json)
# print the JSON string representation of the object
print(List200Response.to_json())

# convert the object into a dict
list200_response_dict = list200_response_instance.to_dict()
# create an instance of List200Response from a dict
list200_response_from_dict = List200Response.from_dict(list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


