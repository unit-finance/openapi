# UpdateIndividualApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | 
**occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the individual. | [optional] 
**annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the individual. | [optional] 
**source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the individual. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_individual_application_data_attributes import UpdateIndividualApplicationDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIndividualApplicationDataAttributes from a JSON string
update_individual_application_data_attributes_instance = UpdateIndividualApplicationDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateIndividualApplicationDataAttributes.to_json())

# convert the object into a dict
update_individual_application_data_attributes_dict = update_individual_application_data_attributes_instance.to_dict()
# create an instance of UpdateIndividualApplicationDataAttributes from a dict
update_individual_application_data_attributes_from_dict = UpdateIndividualApplicationDataAttributes.from_dict(update_individual_application_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


