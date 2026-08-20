# CreateBatchReleasesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateBatchReleasesData**](CreateBatchReleasesData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_batch_releases_request import CreateBatchReleasesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBatchReleasesRequest from a JSON string
create_batch_releases_request_instance = CreateBatchReleasesRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBatchReleasesRequest.to_json())

# convert the object into a dict
create_batch_releases_request_dict = create_batch_releases_request_instance.to_dict()
# create an instance of CreateBatchReleasesRequest from a dict
create_batch_releases_request_from_dict = CreateBatchReleasesRequest.from_dict(create_batch_releases_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


