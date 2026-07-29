# UpdateBusinessBeneficialOwnerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the beneficial owner. | [optional] 
**annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the beneficial owner. | [optional] 
**source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the beneficial owner. | [optional] 
**percentage** | **str** | Optional. The beneficial owner percentage of ownership at the business (between 25 and 100). | [optional] 

## Example

```python
from unit_finance_sdk.models.update_business_beneficial_owner_data_attributes import UpdateBusinessBeneficialOwnerDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessBeneficialOwnerDataAttributes from a JSON string
update_business_beneficial_owner_data_attributes_instance = UpdateBusinessBeneficialOwnerDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessBeneficialOwnerDataAttributes.to_json())

# convert the object into a dict
update_business_beneficial_owner_data_attributes_dict = update_business_beneficial_owner_data_attributes_instance.to_dict()
# create an instance of UpdateBusinessBeneficialOwnerDataAttributes from a dict
update_business_beneficial_owner_data_attributes_from_dict = UpdateBusinessBeneficialOwnerDataAttributes.from_dict(update_business_beneficial_owner_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


