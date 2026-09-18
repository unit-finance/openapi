# AddAuthorizedUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AddAuthorizedUsersData**](AddAuthorizedUsersData.md) |  | 

## Example

```python
from unit_finance_sdk.models.add_authorized_users_request import AddAuthorizedUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddAuthorizedUsersRequest from a JSON string
add_authorized_users_request_instance = AddAuthorizedUsersRequest.from_json(json)
# print the JSON string representation of the object
print(AddAuthorizedUsersRequest.to_json())

# convert the object into a dict
add_authorized_users_request_dict = add_authorized_users_request_instance.to_dict()
# create an instance of AddAuthorizedUsersRequest from a dict
add_authorized_users_request_from_dict = AddAuthorizedUsersRequest.from_dict(add_authorized_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


