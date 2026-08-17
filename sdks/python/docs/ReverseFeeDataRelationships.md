# ReverseFeeDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | 
**transaction** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.reverse_fee_data_relationships import ReverseFeeDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ReverseFeeDataRelationships from a JSON string
reverse_fee_data_relationships_instance = ReverseFeeDataRelationships.from_json(json)
# print the JSON string representation of the object
print(ReverseFeeDataRelationships.to_json())

# convert the object into a dict
reverse_fee_data_relationships_dict = reverse_fee_data_relationships_instance.to_dict()
# create an instance of ReverseFeeDataRelationships from a dict
reverse_fee_data_relationships_from_dict = ReverseFeeDataRelationships.from_dict(reverse_fee_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


