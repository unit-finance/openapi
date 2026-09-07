# FreezeCardData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**FreezeCardDataAttributes**](FreezeCardDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_card_data import FreezeCardData

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeCardData from a JSON string
freeze_card_data_instance = FreezeCardData.from_json(json)
# print the JSON string representation of the object
print(FreezeCardData.to_json())

# convert the object into a dict
freeze_card_data_dict = freeze_card_data_instance.to_dict()
# create an instance of FreezeCardData from a dict
freeze_card_data_from_dict = FreezeCardData.from_dict(freeze_card_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


