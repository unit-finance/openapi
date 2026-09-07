# ReplaceCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ReplaceCardData**](ReplaceCardData.md) |  | 

## Example

```python
from unit_finance_sdk.models.replace_card_request import ReplaceCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceCardRequest from a JSON string
replace_card_request_instance = ReplaceCardRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceCardRequest.to_json())

# convert the object into a dict
replace_card_request_dict = replace_card_request_instance.to_dict()
# create an instance of ReplaceCardRequest from a dict
replace_card_request_from_dict = ReplaceCardRequest.from_dict(replace_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


