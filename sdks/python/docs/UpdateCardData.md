# UpdateCardData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateCardDataAttributes**](UpdateCardDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_card_data import UpdateCardData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCardData from a JSON string
update_card_data_instance = UpdateCardData.from_json(json)
# print the JSON string representation of the object
print(UpdateCardData.to_json())

# convert the object into a dict
update_card_data_dict = update_card_data_instance.to_dict()
# create an instance of UpdateCardData from a dict
update_card_data_from_dict = UpdateCardData.from_dict(update_card_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


