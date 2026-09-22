# GetAuthorization200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Authorization**](Authorization.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_authorization200_response import GetAuthorization200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAuthorization200Response from a JSON string
get_authorization200_response_instance = GetAuthorization200Response.from_json(json)
# print the JSON string representation of the object
print(GetAuthorization200Response.to_json())

# convert the object into a dict
get_authorization200_response_dict = get_authorization200_response_instance.to_dict()
# create an instance of GetAuthorization200Response from a dict
get_authorization200_response_from_dict = GetAuthorization200Response.from_dict(get_authorization200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


