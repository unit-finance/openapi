# ReplaceCardData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**ReplaceCardDataAttributes**](ReplaceCardDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.replace_card_data import ReplaceCardData

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceCardData from a JSON string
replace_card_data_instance = ReplaceCardData.from_json(json)
# print the JSON string representation of the object
print(ReplaceCardData.to_json())

# convert the object into a dict
replace_card_data_dict = replace_card_data_instance.to_dict()
# create an instance of ReplaceCardData from a dict
replace_card_data_from_dict = ReplaceCardData.from_dict(replace_card_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


