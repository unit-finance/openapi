# ListAccounts200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WalletAccountAttributes**](WalletAccountAttributes.md) |  | 
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_accounts200_response_data_inner import ListAccounts200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccounts200ResponseDataInner from a JSON string
list_accounts200_response_data_inner_instance = ListAccounts200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListAccounts200ResponseDataInner.to_json())

# convert the object into a dict
list_accounts200_response_data_inner_dict = list_accounts200_response_data_inner_instance.to_dict()
# create an instance of ListAccounts200ResponseDataInner from a dict
list_accounts200_response_data_inner_from_dict = ListAccounts200ResponseDataInner.from_dict(list_accounts200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


