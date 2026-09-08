# AccountLowBalanceClosureTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**receiver_account** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.account_low_balance_closure_transaction_relationships import AccountLowBalanceClosureTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AccountLowBalanceClosureTransactionRelationships from a JSON string
account_low_balance_closure_transaction_relationships_instance = AccountLowBalanceClosureTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(AccountLowBalanceClosureTransactionRelationships.to_json())

# convert the object into a dict
account_low_balance_closure_transaction_relationships_dict = account_low_balance_closure_transaction_relationships_instance.to_dict()
# create an instance of AccountLowBalanceClosureTransactionRelationships from a dict
account_low_balance_closure_transaction_relationships_from_dict = AccountLowBalanceClosureTransactionRelationships.from_dict(account_low_balance_closure_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


