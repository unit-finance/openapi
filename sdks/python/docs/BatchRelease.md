# BatchRelease

`BatchRelease` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BatchReleaseAttributes**](BatchReleaseAttributes.md) |  | 
**relationships** | [**BatchReleaseRelationships**](BatchReleaseRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.batch_release import BatchRelease

# TODO update the JSON string below
json = "{}"
# create an instance of BatchRelease from a JSON string
batch_release_instance = BatchRelease.from_json(json)
# print the JSON string representation of the object
print(BatchRelease.to_json())

# convert the object into a dict
batch_release_dict = batch_release_instance.to_dict()
# create an instance of BatchRelease from a dict
batch_release_from_dict = BatchRelease.from_dict(batch_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


