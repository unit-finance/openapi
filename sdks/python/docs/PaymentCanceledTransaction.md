# PaymentCanceledTransaction

The transaction represents an originated ACH that has been canceled by its originator prior to its transmission to the ACH network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | 
**relationships** | [**PaymentCanceledTransactionRelationships**](PaymentCanceledTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.payment_canceled_transaction import PaymentCanceledTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentCanceledTransaction from a JSON string
payment_canceled_transaction_instance = PaymentCanceledTransaction.from_json(json)
# print the JSON string representation of the object
print(PaymentCanceledTransaction.to_json())

# convert the object into a dict
payment_canceled_transaction_dict = payment_canceled_transaction_instance.to_dict()
# create an instance of PaymentCanceledTransaction from a dict
payment_canceled_transaction_from_dict = PaymentCanceledTransaction.from_dict(payment_canceled_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


