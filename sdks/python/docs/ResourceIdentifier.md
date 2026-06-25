# ResourceIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 

## Example

```python
from unit_finance_sdk.models.resource_identifier import ResourceIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceIdentifier from a JSON string
resource_identifier_instance = ResourceIdentifier.from_json(json)
# print the JSON string representation of the object
print(ResourceIdentifier.to_json())

# convert the object into a dict
resource_identifier_dict = resource_identifier_instance.to_dict()
# create an instance of ResourceIdentifier from a dict
resource_identifier_from_dict = ResourceIdentifier.from_dict(resource_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


