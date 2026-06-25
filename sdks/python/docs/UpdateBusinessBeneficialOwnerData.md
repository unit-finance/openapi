# UpdateBusinessBeneficialOwnerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateBusinessBeneficialOwnerDataAttributes**](UpdateBusinessBeneficialOwnerDataAttributes.md) |  | 
**relationships** | [**UpdateBusinessBeneficialOwnerDataRelationships**](UpdateBusinessBeneficialOwnerDataRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.update_business_beneficial_owner_data import UpdateBusinessBeneficialOwnerData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessBeneficialOwnerData from a JSON string
update_business_beneficial_owner_data_instance = UpdateBusinessBeneficialOwnerData.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessBeneficialOwnerData.to_json())

# convert the object into a dict
update_business_beneficial_owner_data_dict = update_business_beneficial_owner_data_instance.to_dict()
# create an instance of UpdateBusinessBeneficialOwnerData from a dict
update_business_beneficial_owner_data_from_dict = UpdateBusinessBeneficialOwnerData.from_dict(update_business_beneficial_owner_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


