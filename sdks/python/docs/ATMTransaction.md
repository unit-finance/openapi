# ATMTransaction

`AtmTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ATMTransactionAttributes**](ATMTransactionAttributes.md) |  | 
**relationships** | [**ATMTransactionRelationships**](ATMTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.atm_transaction import ATMTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ATMTransaction from a JSON string
atm_transaction_instance = ATMTransaction.from_json(json)
# print the JSON string representation of the object
print(ATMTransaction.to_json())

# convert the object into a dict
atm_transaction_dict = atm_transaction_instance.to_dict()
# create an instance of ATMTransaction from a dict
atm_transaction_from_dict = ATMTransaction.from_dict(atm_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


