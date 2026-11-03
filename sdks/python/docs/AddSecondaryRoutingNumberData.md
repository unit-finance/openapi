# AddSecondaryRoutingNumberData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | **object** |  | [optional] 
**relationships** | [**AddSecondaryRoutingNumberDataRelationships**](AddSecondaryRoutingNumberDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.add_secondary_routing_number_data import AddSecondaryRoutingNumberData

# TODO update the JSON string below
json = "{}"
# create an instance of AddSecondaryRoutingNumberData from a JSON string
add_secondary_routing_number_data_instance = AddSecondaryRoutingNumberData.from_json(json)
# print the JSON string representation of the object
print(AddSecondaryRoutingNumberData.to_json())

# convert the object into a dict
add_secondary_routing_number_data_dict = add_secondary_routing_number_data_instance.to_dict()
# create an instance of AddSecondaryRoutingNumberData from a dict
add_secondary_routing_number_data_from_dict = AddSecondaryRoutingNumberData.from_dict(add_secondary_routing_number_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


