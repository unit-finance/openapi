# FeeReversalRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**transaction** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.fee_reversal_relationships import FeeReversalRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of FeeReversalRelationships from a JSON string
fee_reversal_relationships_instance = FeeReversalRelationships.from_json(json)
# print the JSON string representation of the object
print(FeeReversalRelationships.to_json())

# convert the object into a dict
fee_reversal_relationships_dict = fee_reversal_relationships_instance.to_dict()
# create an instance of FeeReversalRelationships from a dict
fee_reversal_relationships_from_dict = FeeReversalRelationships.from_dict(fee_reversal_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


