# UpdateCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_address** | [**AddressType**](AddressType.md) | Address to ship the card to. | [optional] 
**address** | [**AddressType**](AddressType.md) | Address of the card holder. | [optional] 
**email** | **str** | Email address of the card holder. | [optional] 
**phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. | [optional] 
**date_of_birth** | **date** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). | [optional] 

## Example

```python
from unit_finance_sdk.models.update_card_data_attributes import UpdateCardDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCardDataAttributes from a JSON string
update_card_data_attributes_instance = UpdateCardDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateCardDataAttributes.to_json())

# convert the object into a dict
update_card_data_attributes_dict = update_card_data_attributes_instance.to_dict()
# create an instance of UpdateCardDataAttributes from a dict
update_card_data_attributes_from_dict = UpdateCardDataAttributes.from_dict(update_card_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


