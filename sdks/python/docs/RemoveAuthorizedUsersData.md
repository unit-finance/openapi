# RemoveAuthorizedUsersData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**RemoveAuthorizedUsersDataAttributes**](RemoveAuthorizedUsersDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.remove_authorized_users_data import RemoveAuthorizedUsersData

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveAuthorizedUsersData from a JSON string
remove_authorized_users_data_instance = RemoveAuthorizedUsersData.from_json(json)
# print the JSON string representation of the object
print(RemoveAuthorizedUsersData.to_json())

# convert the object into a dict
remove_authorized_users_data_dict = remove_authorized_users_data_instance.to_dict()
# create an instance of RemoveAuthorizedUsersData from a dict
remove_authorized_users_data_from_dict = RemoveAuthorizedUsersData.from_dict(remove_authorized_users_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


