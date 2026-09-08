# DisputeTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**disputed_transaction** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.dispute_transaction_relationships import DisputeTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeTransactionRelationships from a JSON string
dispute_transaction_relationships_instance = DisputeTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(DisputeTransactionRelationships.to_json())

# convert the object into a dict
dispute_transaction_relationships_dict = dispute_transaction_relationships_instance.to_dict()
# create an instance of DisputeTransactionRelationships from a dict
dispute_transaction_relationships_from_dict = DisputeTransactionRelationships.from_dict(dispute_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


