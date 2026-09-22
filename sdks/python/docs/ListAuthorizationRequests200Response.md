# ListAuthorizationRequests200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListAuthorizationRequests200ResponseDataInner]**](ListAuthorizationRequests200ResponseDataInner.md) | Array of authorization request resources. | 

## Example

```python
from unit_finance_sdk.models.list_authorization_requests200_response import ListAuthorizationRequests200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuthorizationRequests200Response from a JSON string
list_authorization_requests200_response_instance = ListAuthorizationRequests200Response.from_json(json)
# print the JSON string representation of the object
print(ListAuthorizationRequests200Response.to_json())

# convert the object into a dict
list_authorization_requests200_response_dict = list_authorization_requests200_response_instance.to_dict()
# create an instance of ListAuthorizationRequests200Response from a dict
list_authorization_requests200_response_from_dict = ListAuthorizationRequests200Response.from_dict(list_authorization_requests200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


