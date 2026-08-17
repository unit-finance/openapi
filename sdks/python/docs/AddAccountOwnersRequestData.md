# AddAccountOwnersRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AddAccountOwnersRequestDataAttributes**](AddAccountOwnersRequestDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.add_account_owners_request_data import AddAccountOwnersRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AddAccountOwnersRequestData from a JSON string
add_account_owners_request_data_instance = AddAccountOwnersRequestData.from_json(json)
# print the JSON string representation of the object
print(AddAccountOwnersRequestData.to_json())

# convert the object into a dict
add_account_owners_request_data_dict = add_account_owners_request_data_instance.to_dict()
# create an instance of AddAccountOwnersRequestData from a dict
add_account_owners_request_data_from_dict = AddAccountOwnersRequestData.from_dict(add_account_owners_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


