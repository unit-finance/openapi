# AddAccountOwners200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DepositAccount**](DepositAccount.md) |  | 

## Example

```python
from unit_finance_sdk.models.add_account_owners200_response import AddAccountOwners200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AddAccountOwners200Response from a JSON string
add_account_owners200_response_instance = AddAccountOwners200Response.from_json(json)
# print the JSON string representation of the object
print(AddAccountOwners200Response.to_json())

# convert the object into a dict
add_account_owners200_response_dict = add_account_owners200_response_instance.to_dict()
# create an instance of AddAccountOwners200Response from a dict
add_account_owners200_response_from_dict = AddAccountOwners200Response.from_dict(add_account_owners200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


