# GetAuthorizedUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AuthorizedUserType**](AuthorizedUserType.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_authorized_user200_response import GetAuthorizedUser200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAuthorizedUser200Response from a JSON string
get_authorized_user200_response_instance = GetAuthorizedUser200Response.from_json(json)
# print the JSON string representation of the object
print(GetAuthorizedUser200Response.to_json())

# convert the object into a dict
get_authorized_user200_response_dict = get_authorized_user200_response_instance.to_dict()
# create an instance of GetAuthorizedUser200Response from a dict
get_authorized_user200_response_from_dict = GetAuthorizedUser200Response.from_dict(get_authorized_user200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


