# InterestShareTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.interest_share_transaction_relationships import InterestShareTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of InterestShareTransactionRelationships from a JSON string
interest_share_transaction_relationships_instance = InterestShareTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(InterestShareTransactionRelationships.to_json())

# convert the object into a dict
interest_share_transaction_relationships_dict = interest_share_transaction_relationships_instance.to_dict()
# create an instance of InterestShareTransactionRelationships from a dict
interest_share_transaction_relationships_from_dict = InterestShareTransactionRelationships.from_dict(interest_share_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


