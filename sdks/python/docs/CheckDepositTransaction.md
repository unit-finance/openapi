# CheckDepositTransaction

`CheckDepositTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | 
**relationships** | [**CheckDepositTransactionRelationships**](CheckDepositTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_deposit_transaction import CheckDepositTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDepositTransaction from a JSON string
check_deposit_transaction_instance = CheckDepositTransaction.from_json(json)
# print the JSON string representation of the object
print(CheckDepositTransaction.to_json())

# convert the object into a dict
check_deposit_transaction_dict = check_deposit_transaction_instance.to_dict()
# create an instance of CheckDepositTransaction from a dict
check_deposit_transaction_from_dict = CheckDepositTransaction.from_dict(check_deposit_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


