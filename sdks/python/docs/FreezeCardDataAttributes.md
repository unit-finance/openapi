# FreezeCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The freeze reason in free text. | [optional] 

## Example

```python
from unit_finance_sdk.models.freeze_card_data_attributes import FreezeCardDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeCardDataAttributes from a JSON string
freeze_card_data_attributes_instance = FreezeCardDataAttributes.from_json(json)
# print the JSON string representation of the object
print(FreezeCardDataAttributes.to_json())

# convert the object into a dict
freeze_card_data_attributes_dict = freeze_card_data_attributes_instance.to_dict()
# create an instance of FreezeCardDataAttributes from a dict
freeze_card_data_attributes_from_dict = FreezeCardDataAttributes.from_dict(freeze_card_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


