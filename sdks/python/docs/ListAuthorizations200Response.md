# ListAuthorizations200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Authorization]**](Authorization.md) | Array of authorization resources. | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_authorizations200_response import ListAuthorizations200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuthorizations200Response from a JSON string
list_authorizations200_response_instance = ListAuthorizations200Response.from_json(json)
# print the JSON string representation of the object
print(ListAuthorizations200Response.to_json())

# convert the object into a dict
list_authorizations200_response_dict = list_authorizations200_response_instance.to_dict()
# create an instance of ListAuthorizations200Response from a dict
list_authorizations200_response_from_dict = ListAuthorizations200Response.from_dict(list_authorizations200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


