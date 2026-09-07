# PinStatusAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Status of the PIN, either Set or NotSet. | 

## Example

```python
from unit_finance_sdk.models.pin_status_attributes import PinStatusAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PinStatusAttributes from a JSON string
pin_status_attributes_instance = PinStatusAttributes.from_json(json)
# print the JSON string representation of the object
print(PinStatusAttributes.to_json())

# convert the object into a dict
pin_status_attributes_dict = pin_status_attributes_instance.to_dict()
# create an instance of PinStatusAttributes from a dict
pin_status_attributes_from_dict = PinStatusAttributes.from_dict(pin_status_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


