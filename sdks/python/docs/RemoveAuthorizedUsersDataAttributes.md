# RemoveAuthorizedUsersDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_users_emails** | **List[str]** | The list of authorized users emails to remove from the customer. | 

## Example

```python
from unit_finance_sdk.models.remove_authorized_users_data_attributes import RemoveAuthorizedUsersDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveAuthorizedUsersDataAttributes from a JSON string
remove_authorized_users_data_attributes_instance = RemoveAuthorizedUsersDataAttributes.from_json(json)
# print the JSON string representation of the object
print(RemoveAuthorizedUsersDataAttributes.to_json())

# convert the object into a dict
remove_authorized_users_data_attributes_dict = remove_authorized_users_data_attributes_instance.to_dict()
# create an instance of RemoveAuthorizedUsersDataAttributes from a dict
remove_authorized_users_data_attributes_from_dict = RemoveAuthorizedUsersDataAttributes.from_dict(remove_authorized_users_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


