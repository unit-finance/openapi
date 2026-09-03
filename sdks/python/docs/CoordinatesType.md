# CoordinatesType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**longitude** | **float** | The longitude value. | 
**latitude** | **float** | The latitude value. | 

## Example

```python
from unit_finance_sdk.models.coordinates_type import CoordinatesType

# TODO update the JSON string below
json = "{}"
# create an instance of CoordinatesType from a JSON string
coordinates_type_instance = CoordinatesType.from_json(json)
# print the JSON string representation of the object
print(CoordinatesType.to_json())

# convert the object into a dict
coordinates_type_dict = coordinates_type_instance.to_dict()
# create an instance of CoordinatesType from a dict
coordinates_type_from_dict = CoordinatesType.from_dict(coordinates_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


