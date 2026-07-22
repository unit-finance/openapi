# WalletAccount

`WalletAccount` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WalletAccountAttributes**](WalletAccountAttributes.md) |  | 
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.wallet_account import WalletAccount

# TODO update the JSON string below
json = "{}"
# create an instance of WalletAccount from a JSON string
wallet_account_instance = WalletAccount.from_json(json)
# print the JSON string representation of the object
print(WalletAccount.to_json())

# convert the object into a dict
wallet_account_dict = wallet_account_instance.to_dict()
# create an instance of WalletAccount from a dict
wallet_account_from_dict = WalletAccount.from_dict(wallet_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


