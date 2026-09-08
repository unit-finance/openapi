# PaymentAdvanceTransaction

`PaymentAdvanceTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**PaymentAdvanceTransactionAttributes**](PaymentAdvanceTransactionAttributes.md) |  | 
**relationships** | [**PaymentAdvanceTransactionRelationships**](PaymentAdvanceTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.payment_advance_transaction import PaymentAdvanceTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentAdvanceTransaction from a JSON string
payment_advance_transaction_instance = PaymentAdvanceTransaction.from_json(json)
# print the JSON string representation of the object
print(PaymentAdvanceTransaction.to_json())

# convert the object into a dict
payment_advance_transaction_dict = payment_advance_transaction_instance.to_dict()
# create an instance of PaymentAdvanceTransaction from a dict
payment_advance_transaction_from_dict = PaymentAdvanceTransaction.from_dict(payment_advance_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


