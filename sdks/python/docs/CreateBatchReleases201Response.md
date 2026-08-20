# CreateBatchReleases201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BatchRelease]**](BatchRelease.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_batch_releases201_response import CreateBatchReleases201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBatchReleases201Response from a JSON string
create_batch_releases201_response_instance = CreateBatchReleases201Response.from_json(json)
# print the JSON string representation of the object
print(CreateBatchReleases201Response.to_json())

# convert the object into a dict
create_batch_releases201_response_dict = create_batch_releases201_response_instance.to_dict()
# create an instance of CreateBatchReleases201Response from a dict
create_batch_releases201_response_from_dict = CreateBatchReleases201Response.from_dict(create_batch_releases201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


