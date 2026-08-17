# VerifyAccount200ResponseDataAccount

Present when exists is true. Same shape as GET /accounts/:id. May be any account type (e.g. depositAccount, walletAccount).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WalletAccountAttributes**](WalletAccountAttributes.md) |  | 
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.verify_account200_response_data_account import VerifyAccount200ResponseDataAccount

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyAccount200ResponseDataAccount from a JSON string
verify_account200_response_data_account_instance = VerifyAccount200ResponseDataAccount.from_json(json)
# print the JSON string representation of the object
print(VerifyAccount200ResponseDataAccount.to_json())

# convert the object into a dict
verify_account200_response_data_account_dict = verify_account200_response_data_account_instance.to_dict()
# create an instance of VerifyAccount200ResponseDataAccount from a dict
verify_account200_response_data_account_from_dict = VerifyAccount200ResponseDataAccount.from_dict(verify_account200_response_data_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


