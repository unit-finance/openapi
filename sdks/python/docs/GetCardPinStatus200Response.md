# GetCardPinStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PinStatus**](PinStatus.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_card_pin_status200_response import GetCardPinStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetCardPinStatus200Response from a JSON string
get_card_pin_status200_response_instance = GetCardPinStatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetCardPinStatus200Response.to_json())

# convert the object into a dict
get_card_pin_status200_response_dict = get_card_pin_status200_response_instance.to_dict()
# create an instance of GetCardPinStatus200Response from a dict
get_card_pin_status200_response_from_dict = GetCardPinStatus200Response.from_dict(get_card_pin_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


