# ListAuthorizedUsers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AuthorizedUserType]**](AuthorizedUserType.md) |  | 

## Example

```python
from unit_finance_sdk.models.list_authorized_users200_response import ListAuthorizedUsers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuthorizedUsers200Response from a JSON string
list_authorized_users200_response_instance = ListAuthorizedUsers200Response.from_json(json)
# print the JSON string representation of the object
print(ListAuthorizedUsers200Response.to_json())

# convert the object into a dict
list_authorized_users200_response_dict = list_authorized_users200_response_instance.to_dict()
# create an instance of ListAuthorizedUsers200Response from a dict
list_authorized_users200_response_from_dict = ListAuthorizedUsers200Response.from_dict(list_authorized_users200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


