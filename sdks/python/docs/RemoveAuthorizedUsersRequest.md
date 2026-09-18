# RemoveAuthorizedUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RemoveAuthorizedUsersData**](RemoveAuthorizedUsersData.md) |  | 

## Example

```python
from unit_finance_sdk.models.remove_authorized_users_request import RemoveAuthorizedUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveAuthorizedUsersRequest from a JSON string
remove_authorized_users_request_instance = RemoveAuthorizedUsersRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveAuthorizedUsersRequest.to_json())

# convert the object into a dict
remove_authorized_users_request_dict = remove_authorized_users_request_instance.to_dict()
# create an instance of RemoveAuthorizedUsersRequest from a dict
remove_authorized_users_request_from_dict = RemoveAuthorizedUsersRequest.from_dict(remove_authorized_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


