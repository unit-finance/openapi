# ChargebackTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] 
**chargeback** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.chargeback_transaction_relationships import ChargebackTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ChargebackTransactionRelationships from a JSON string
chargeback_transaction_relationships_instance = ChargebackTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(ChargebackTransactionRelationships.to_json())

# convert the object into a dict
chargeback_transaction_relationships_dict = chargeback_transaction_relationships_instance.to_dict()
# create an instance of ChargebackTransactionRelationships from a dict
chargeback_transaction_relationships_from_dict = ChargebackTransactionRelationships.from_dict(chargeback_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


