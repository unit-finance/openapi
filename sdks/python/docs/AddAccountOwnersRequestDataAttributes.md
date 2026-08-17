# AddAccountOwnersRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ResourceIdentifier]**](ResourceIdentifier.md) | A list of individual customers to be added to the account. | 

## Example

```python
from unit_finance_sdk.models.add_account_owners_request_data_attributes import AddAccountOwnersRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AddAccountOwnersRequestDataAttributes from a JSON string
add_account_owners_request_data_attributes_instance = AddAccountOwnersRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AddAccountOwnersRequestDataAttributes.to_json())

# convert the object into a dict
add_account_owners_request_data_attributes_dict = add_account_owners_request_data_attributes_instance.to_dict()
# create an instance of AddAccountOwnersRequestDataAttributes from a dict
add_account_owners_request_data_attributes_from_dict = AddAccountOwnersRequestDataAttributes.from_dict(add_account_owners_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


