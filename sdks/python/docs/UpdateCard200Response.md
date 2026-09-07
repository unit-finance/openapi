# UpdateCard200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateCard200ResponseData**](UpdateCard200ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_card200_response import UpdateCard200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCard200Response from a JSON string
update_card200_response_instance = UpdateCard200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateCard200Response.to_json())

# convert the object into a dict
update_card200_response_dict = update_card200_response_instance.to_dict()
# create an instance of UpdateCard200Response from a dict
update_card200_response_from_dict = UpdateCard200Response.from_dict(update_card200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


