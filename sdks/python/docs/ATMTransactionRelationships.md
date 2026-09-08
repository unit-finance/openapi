# ATMTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**card** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.atm_transaction_relationships import ATMTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ATMTransactionRelationships from a JSON string
atm_transaction_relationships_instance = ATMTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(ATMTransactionRelationships.to_json())

# convert the object into a dict
atm_transaction_relationships_dict = atm_transaction_relationships_instance.to_dict()
# create an instance of ATMTransactionRelationships from a dict
atm_transaction_relationships_from_dict = ATMTransactionRelationships.from_dict(atm_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


