# ReturnedCheckDepositTransaction

`ReturnedCheckDepositTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ReturnedCheckDepositTransactionAttributes**](ReturnedCheckDepositTransactionAttributes.md) |  | 
**relationships** | [**CheckDepositTransactionRelationships**](CheckDepositTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.returned_check_deposit_transaction import ReturnedCheckDepositTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedCheckDepositTransaction from a JSON string
returned_check_deposit_transaction_instance = ReturnedCheckDepositTransaction.from_json(json)
# print the JSON string representation of the object
print(ReturnedCheckDepositTransaction.to_json())

# convert the object into a dict
returned_check_deposit_transaction_dict = returned_check_deposit_transaction_instance.to_dict()
# create an instance of ReturnedCheckDepositTransaction from a dict
returned_check_deposit_transaction_from_dict = ReturnedCheckDepositTransaction.from_dict(returned_check_deposit_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


