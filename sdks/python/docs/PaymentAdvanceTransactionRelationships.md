# PaymentAdvanceTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**received_payment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.payment_advance_transaction_relationships import PaymentAdvanceTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentAdvanceTransactionRelationships from a JSON string
payment_advance_transaction_relationships_instance = PaymentAdvanceTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(PaymentAdvanceTransactionRelationships.to_json())

# convert the object into a dict
payment_advance_transaction_relationships_dict = payment_advance_transaction_relationships_instance.to_dict()
# create an instance of PaymentAdvanceTransactionRelationships from a dict
payment_advance_transaction_relationships_from_dict = PaymentAdvanceTransactionRelationships.from_dict(payment_advance_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


