# AddAccountOwnersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AddAccountOwnersRequestData**](AddAccountOwnersRequestData.md) |  | 

## Example

```python
from unit_finance_sdk.models.add_account_owners_request import AddAccountOwnersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddAccountOwnersRequest from a JSON string
add_account_owners_request_instance = AddAccountOwnersRequest.from_json(json)
# print the JSON string representation of the object
print(AddAccountOwnersRequest.to_json())

# convert the object into a dict
add_account_owners_request_dict = add_account_owners_request_instance.to_dict()
# create an instance of AddAccountOwnersRequest from a dict
add_account_owners_request_from_dict = AddAccountOwnersRequest.from_dict(add_account_owners_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


