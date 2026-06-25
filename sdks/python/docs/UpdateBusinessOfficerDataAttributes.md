# UpdateBusinessOfficerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**officer_occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the officer. | [optional] 
**officer_annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the officer. | [optional] 
**officer_source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the officer. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_business_officer_data_attributes import UpdateBusinessOfficerDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessOfficerDataAttributes from a JSON string
update_business_officer_data_attributes_instance = UpdateBusinessOfficerDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessOfficerDataAttributes.to_json())

# convert the object into a dict
update_business_officer_data_attributes_dict = update_business_officer_data_attributes_instance.to_dict()
# create an instance of UpdateBusinessOfficerDataAttributes from a dict
update_business_officer_data_attributes_from_dict = UpdateBusinessOfficerDataAttributes.from_dict(update_business_officer_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


