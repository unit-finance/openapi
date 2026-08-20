# BatchReleaseRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_account** | [**Relationship**](Relationship.md) |  | [optional] 
**receiver** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.batch_release_relationships import BatchReleaseRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BatchReleaseRelationships from a JSON string
batch_release_relationships_instance = BatchReleaseRelationships.from_json(json)
# print the JSON string representation of the object
print(BatchReleaseRelationships.to_json())

# convert the object into a dict
batch_release_relationships_dict = batch_release_relationships_instance.to_dict()
# create an instance of BatchReleaseRelationships from a dict
batch_release_relationships_from_dict = BatchReleaseRelationships.from_dict(batch_release_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


