# AddAuthorizedUsersData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**AddAuthorizedUsersDataAttributes**](AddAuthorizedUsersDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.add_authorized_users_data import AddAuthorizedUsersData

# TODO update the JSON string below
json = "{}"
# create an instance of AddAuthorizedUsersData from a JSON string
add_authorized_users_data_instance = AddAuthorizedUsersData.from_json(json)
# print the JSON string representation of the object
print(AddAuthorizedUsersData.to_json())

# convert the object into a dict
add_authorized_users_data_dict = add_authorized_users_data_instance.to_dict()
# create an instance of AddAuthorizedUsersData from a dict
add_authorized_users_data_from_dict = AddAuthorizedUsersData.from_dict(add_authorized_users_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


