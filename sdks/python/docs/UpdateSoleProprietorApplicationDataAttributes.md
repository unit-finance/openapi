# UpdateSoleProprietorApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | 
**annual_revenue** | [**SoleProprietorAnnualRevenue**](SoleProprietorAnnualRevenue.md) | Optional. Specify the annual revenue here. | [optional] 
**number_of_employees** | [**SoleProprietorNumberOfEmployees**](SoleProprietorNumberOfEmployees.md) | Optional. Specify the number of employees here. | [optional] 
**business_vertical** | [**BusinessVertical**](BusinessVertical.md) | Optional. Specify the business vertical here. | [optional] 
**website** | **str** | Optional. Specify the business website here. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_sole_proprietor_application_data_attributes import UpdateSoleProprietorApplicationDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSoleProprietorApplicationDataAttributes from a JSON string
update_sole_proprietor_application_data_attributes_instance = UpdateSoleProprietorApplicationDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateSoleProprietorApplicationDataAttributes.to_json())

# convert the object into a dict
update_sole_proprietor_application_data_attributes_dict = update_sole_proprietor_application_data_attributes_instance.to_dict()
# create an instance of UpdateSoleProprietorApplicationDataAttributes from a dict
update_sole_proprietor_application_data_attributes_from_dict = UpdateSoleProprietorApplicationDataAttributes.from_dict(update_sole_proprietor_application_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


