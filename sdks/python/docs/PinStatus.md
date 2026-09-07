# PinStatus

`PinStatus` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**PinStatusAttributes**](PinStatusAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.pin_status import PinStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PinStatus from a JSON string
pin_status_instance = PinStatus.from_json(json)
# print the JSON string representation of the object
print(PinStatus.to_json())

# convert the object into a dict
pin_status_dict = pin_status_instance.to_dict()
# create an instance of PinStatus from a dict
pin_status_from_dict = PinStatus.from_dict(pin_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


