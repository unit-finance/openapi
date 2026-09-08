# AccountLowBalanceClosureTransaction

An `accountLowBalanceClosureTransaction` represents account low balance closure transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AccountLowBalanceClosureTransactionAttributes**](AccountLowBalanceClosureTransactionAttributes.md) |  | 
**relationships** | [**AccountLowBalanceClosureTransactionRelationships**](AccountLowBalanceClosureTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.account_low_balance_closure_transaction import AccountLowBalanceClosureTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of AccountLowBalanceClosureTransaction from a JSON string
account_low_balance_closure_transaction_instance = AccountLowBalanceClosureTransaction.from_json(json)
# print the JSON string representation of the object
print(AccountLowBalanceClosureTransaction.to_json())

# convert the object into a dict
account_low_balance_closure_transaction_dict = account_low_balance_closure_transaction_instance.to_dict()
# create an instance of AccountLowBalanceClosureTransaction from a dict
account_low_balance_closure_transaction_from_dict = AccountLowBalanceClosureTransaction.from_dict(account_low_balance_closure_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


