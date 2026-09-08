# PurchaseTransaction

`PurchaseTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**PurchaseTransactionAttributes**](PurchaseTransactionAttributes.md) |  | 
**relationships** | [**PurchaseTransactionRelationships**](PurchaseTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.purchase_transaction import PurchaseTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseTransaction from a JSON string
purchase_transaction_instance = PurchaseTransaction.from_json(json)
# print the JSON string representation of the object
print(PurchaseTransaction.to_json())

# convert the object into a dict
purchase_transaction_dict = purchase_transaction_instance.to_dict()
# create an instance of PurchaseTransaction from a dict
purchase_transaction_from_dict = PurchaseTransaction.from_dict(purchase_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


