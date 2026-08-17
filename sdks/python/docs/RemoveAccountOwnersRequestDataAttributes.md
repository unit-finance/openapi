# RemoveAccountOwnersRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ResourceIdentifier]**](ResourceIdentifier.md) | A list of individual customers to be removed from the account. | 

## Example

```python
from unit_finance_sdk.models.remove_account_owners_request_data_attributes import RemoveAccountOwnersRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveAccountOwnersRequestDataAttributes from a JSON string
remove_account_owners_request_data_attributes_instance = RemoveAccountOwnersRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(RemoveAccountOwnersRequestDataAttributes.to_json())

# convert the object into a dict
remove_account_owners_request_data_attributes_dict = remove_account_owners_request_data_attributes_instance.to_dict()
# create an instance of RemoveAccountOwnersRequestDataAttributes from a dict
remove_account_owners_request_data_attributes_from_dict = RemoveAccountOwnersRequestDataAttributes.from_dict(remove_account_owners_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


