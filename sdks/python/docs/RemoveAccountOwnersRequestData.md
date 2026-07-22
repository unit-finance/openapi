# RemoveAccountOwnersRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**RemoveAccountOwnersRequestDataAttributes**](RemoveAccountOwnersRequestDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.remove_account_owners_request_data import RemoveAccountOwnersRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveAccountOwnersRequestData from a JSON string
remove_account_owners_request_data_instance = RemoveAccountOwnersRequestData.from_json(json)
# print the JSON string representation of the object
print(RemoveAccountOwnersRequestData.to_json())

# convert the object into a dict
remove_account_owners_request_data_dict = remove_account_owners_request_data_instance.to_dict()
# create an instance of RemoveAccountOwnersRequestData from a dict
remove_account_owners_request_data_from_dict = RemoveAccountOwnersRequestData.from_dict(remove_account_owners_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


