# ReopenAccount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ReopenAccount200ResponseData**](ReopenAccount200ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.reopen_account200_response import ReopenAccount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReopenAccount200Response from a JSON string
reopen_account200_response_instance = ReopenAccount200Response.from_json(json)
# print the JSON string representation of the object
print(ReopenAccount200Response.to_json())

# convert the object into a dict
reopen_account200_response_dict = reopen_account200_response_instance.to_dict()
# create an instance of ReopenAccount200Response from a dict
reopen_account200_response_from_dict = ReopenAccount200Response.from_dict(reopen_account200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


