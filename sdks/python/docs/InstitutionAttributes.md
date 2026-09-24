# InstitutionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_number** | **str** | Routing number of the institution. Valid 9-digit ABA routing transit number. | 
**name** | **str** | Name of the institution. | 
**address** | **str** | Address of the institution. | [optional] 
**is_ach_supported** | **bool** | Is FedACH participant. | 
**is_wire_supported** | **bool** | Is Fedwire participant. | 

## Example

```python
from unit_finance_sdk.models.institution_attributes import InstitutionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of InstitutionAttributes from a JSON string
institution_attributes_instance = InstitutionAttributes.from_json(json)
# print the JSON string representation of the object
print(InstitutionAttributes.to_json())

# convert the object into a dict
institution_attributes_dict = institution_attributes_instance.to_dict()
# create an instance of InstitutionAttributes from a dict
institution_attributes_from_dict = InstitutionAttributes.from_dict(institution_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


