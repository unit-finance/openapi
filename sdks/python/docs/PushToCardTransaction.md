# PushToCardTransaction

`PushToCardTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CashDepositTransactionAttributes**](CashDepositTransactionAttributes.md) |  | 
**relationships** | [**PushToCardTransactionRelationships**](PushToCardTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.push_to_card_transaction import PushToCardTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of PushToCardTransaction from a JSON string
push_to_card_transaction_instance = PushToCardTransaction.from_json(json)
# print the JSON string representation of the object
print(PushToCardTransaction.to_json())

# convert the object into a dict
push_to_card_transaction_dict = push_to_card_transaction_instance.to_dict()
# create an instance of PushToCardTransaction from a dict
push_to_card_transaction_from_dict = PushToCardTransaction.from_dict(push_to_card_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


