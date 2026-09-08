# PaymentCanceledTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**related_transaction** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.payment_canceled_transaction_relationships import PaymentCanceledTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentCanceledTransactionRelationships from a JSON string
payment_canceled_transaction_relationships_instance = PaymentCanceledTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(PaymentCanceledTransactionRelationships.to_json())

# convert the object into a dict
payment_canceled_transaction_relationships_dict = payment_canceled_transaction_relationships_instance.to_dict()
# create an instance of PaymentCanceledTransactionRelationships from a dict
payment_canceled_transaction_relationships_from_dict = PaymentCanceledTransactionRelationships.from_dict(payment_canceled_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


