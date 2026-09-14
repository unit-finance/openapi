# Officer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**OfficerAttributes**](OfficerAttributes.md) |  | 
**relationships** | [**OfficerRelationships**](OfficerRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.officer import Officer

# TODO update the JSON string below
json = "{}"
# create an instance of Officer from a JSON string
officer_instance = Officer.from_json(json)
# print the JSON string representation of the object
print(Officer.to_json())

# convert the object into a dict
officer_dict = officer_instance.to_dict()
# create an instance of Officer from a dict
officer_from_dict = Officer.from_dict(officer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


