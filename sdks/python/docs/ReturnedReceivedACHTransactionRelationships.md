# ReturnedReceivedACHTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**returned** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.returned_received_ach_transaction_relationships import ReturnedReceivedACHTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedReceivedACHTransactionRelationships from a JSON string
returned_received_ach_transaction_relationships_instance = ReturnedReceivedACHTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(ReturnedReceivedACHTransactionRelationships.to_json())

# convert the object into a dict
returned_received_ach_transaction_relationships_dict = returned_received_ach_transaction_relationships_instance.to_dict()
# create an instance of ReturnedReceivedACHTransactionRelationships from a dict
returned_received_ach_transaction_relationships_from_dict = ReturnedReceivedACHTransactionRelationships.from_dict(returned_received_ach_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


