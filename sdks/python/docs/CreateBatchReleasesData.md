# CreateBatchReleasesData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateBatchReleasesDataAttributes**](CreateBatchReleasesDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_batch_releases_data import CreateBatchReleasesData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBatchReleasesData from a JSON string
create_batch_releases_data_instance = CreateBatchReleasesData.from_json(json)
# print the JSON string representation of the object
print(CreateBatchReleasesData.to_json())

# convert the object into a dict
create_batch_releases_data_dict = create_batch_releases_data_instance.to_dict()
# create an instance of CreateBatchReleasesData from a dict
create_batch_releases_data_from_dict = CreateBatchReleasesData.from_dict(create_batch_releases_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


