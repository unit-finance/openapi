# AddAuthorizedUsersDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_users** | [**List[AuthorizedUserType]**](AuthorizedUserType.md) | Array of authorized users. The provided array items will be added to the existing ones. | 

## Example

```python
from unit_finance_sdk.models.add_authorized_users_data_attributes import AddAuthorizedUsersDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AddAuthorizedUsersDataAttributes from a JSON string
add_authorized_users_data_attributes_instance = AddAuthorizedUsersDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AddAuthorizedUsersDataAttributes.to_json())

# convert the object into a dict
add_authorized_users_data_attributes_dict = add_authorized_users_data_attributes_instance.to_dict()
# create an instance of AddAuthorizedUsersDataAttributes from a dict
add_authorized_users_data_attributes_from_dict = AddAuthorizedUsersDataAttributes.from_dict(add_authorized_users_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


