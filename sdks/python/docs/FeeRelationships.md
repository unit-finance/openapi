# FeeRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.fee_relationships import FeeRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of FeeRelationships from a JSON string
fee_relationships_instance = FeeRelationships.from_json(json)
# print the JSON string representation of the object
print(FeeRelationships.to_json())

# convert the object into a dict
fee_relationships_dict = fee_relationships_instance.to_dict()
# create an instance of FeeRelationships from a dict
fee_relationships_from_dict = FeeRelationships.from_dict(fee_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


