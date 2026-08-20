# RemoveAccountOwnersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ResourceIdentifier]**](ResourceIdentifier.md) | A list of individual customers to be removed from the account. | 

## Example

```python
from unit_finance_sdk.models.remove_account_owners_request import RemoveAccountOwnersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveAccountOwnersRequest from a JSON string
remove_account_owners_request_instance = RemoveAccountOwnersRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveAccountOwnersRequest.to_json())

# convert the object into a dict
remove_account_owners_request_dict = remove_account_owners_request_instance.to_dict()
# create an instance of RemoveAccountOwnersRequest from a dict
remove_account_owners_request_from_dict = RemoveAccountOwnersRequest.from_dict(remove_account_owners_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


