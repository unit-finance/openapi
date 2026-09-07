# ReplaceCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_address** | [**AddressType**](AddressType.md) | Temporary address to ship the replacement card to. If not specified, the address provided during card creation is reused. This will now effect the default shippingAddress. | [optional] 

## Example

```python
from unit_finance_sdk.models.replace_card_data_attributes import ReplaceCardDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceCardDataAttributes from a JSON string
replace_card_data_attributes_instance = ReplaceCardDataAttributes.from_json(json)
# print the JSON string representation of the object
print(ReplaceCardDataAttributes.to_json())

# convert the object into a dict
replace_card_data_attributes_dict = replace_card_data_attributes_instance.to_dict()
# create an instance of ReplaceCardDataAttributes from a dict
replace_card_data_attributes_from_dict = ReplaceCardDataAttributes.from_dict(replace_card_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


