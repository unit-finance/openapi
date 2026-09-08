# CardTransaction

A transaction that represents various card transactions that are not Purchase or ATM transactions. Most commonly, these transactions represent peer-to-peer payments (e.g. Venmo, CashApp) and gig economy employee payouts (ride sharing, deliveries, etc).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CardTransactionAttributes**](CardTransactionAttributes.md) |  | 
**relationships** | [**CardTransactionRelationships**](CardTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.card_transaction import CardTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of CardTransaction from a JSON string
card_transaction_instance = CardTransaction.from_json(json)
# print the JSON string representation of the object
print(CardTransaction.to_json())

# convert the object into a dict
card_transaction_dict = card_transaction_instance.to_dict()
# create an instance of CardTransaction from a dict
card_transaction_from_dict = CardTransaction.from_dict(card_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


