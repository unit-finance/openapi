# DepositAccount

`DepositAccount` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**DepositAccountAttributes**](DepositAccountAttributes.md) |  | 
**relationships** | [**DepositAccountRelationships**](DepositAccountRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.deposit_account import DepositAccount

# TODO update the JSON string below
json = "{}"
# create an instance of DepositAccount from a JSON string
deposit_account_instance = DepositAccount.from_json(json)
# print the JSON string representation of the object
print(DepositAccount.to_json())

# convert the object into a dict
deposit_account_dict = deposit_account_instance.to_dict()
# create an instance of DepositAccount from a dict
deposit_account_from_dict = DepositAccount.from_dict(deposit_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


