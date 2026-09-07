# CloseCard200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListCards200ResponseDataInner**](ListCards200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.close_card200_response import CloseCard200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CloseCard200Response from a JSON string
close_card200_response_instance = CloseCard200Response.from_json(json)
# print the JSON string representation of the object
print(CloseCard200Response.to_json())

# convert the object into a dict
close_card200_response_dict = close_card200_response_instance.to_dict()
# create an instance of CloseCard200Response from a dict
close_card200_response_from_dict = CloseCard200Response.from_dict(close_card200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


