# CashDepositTransaction

`CashDepositTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CashDepositTransactionAttributes**](CashDepositTransactionAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.cash_deposit_transaction import CashDepositTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of CashDepositTransaction from a JSON string
cash_deposit_transaction_instance = CashDepositTransaction.from_json(json)
# print the JSON string representation of the object
print(CashDepositTransaction.to_json())

# convert the object into a dict
cash_deposit_transaction_dict = cash_deposit_transaction_instance.to_dict()
# create an instance of CashDepositTransaction from a dict
cash_deposit_transaction_from_dict = CashDepositTransaction.from_dict(cash_deposit_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


