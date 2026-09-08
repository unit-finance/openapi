# UpdateTagsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateTagsData**](UpdateTagsData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_tags_request import UpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTagsRequest from a JSON string
update_tags_request_instance = UpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTagsRequest.to_json())

# convert the object into a dict
update_tags_request_dict = update_tags_request_instance.to_dict()
# create an instance of UpdateTagsRequest from a dict
update_tags_request_from_dict = UpdateTagsRequest.from_dict(update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


