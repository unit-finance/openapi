# RepaidPaymentAdvanceTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**received_payment** | [**Relationship**](Relationship.md) |  | [optional] 
**payment_advance_transaction** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.repaid_payment_advance_transaction_relationships import RepaidPaymentAdvanceTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RepaidPaymentAdvanceTransactionRelationships from a JSON string
repaid_payment_advance_transaction_relationships_instance = RepaidPaymentAdvanceTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(RepaidPaymentAdvanceTransactionRelationships.to_json())

# convert the object into a dict
repaid_payment_advance_transaction_relationships_dict = repaid_payment_advance_transaction_relationships_instance.to_dict()
# create an instance of RepaidPaymentAdvanceTransactionRelationships from a dict
repaid_payment_advance_transaction_relationships_from_dict = RepaidPaymentAdvanceTransactionRelationships.from_dict(repaid_payment_advance_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


