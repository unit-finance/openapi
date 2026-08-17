# BeneficialOwnerType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | One of Approved, Denied or PendingReview. | 
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the beneficial owner. | 
**ssn** | **str** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] 
**passport** | **str** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] 
**nationality** | **str** | Always when Passport is populated and optional when SSN is populated. Two letters representing the beneficial owner&#39;s nationality. | [optional] 
**date_of_birth** | **date** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | The beneficial owner&#39;s address. | 
**phone** | [**PhoneType**](PhoneType.md) | The beneficial owner&#39;s phone number. | 
**email** | **str** | The beneficial owner&#39;s email address. | 
**percentage** | **int** | The percentage of ownership of the beneficial owner. | [optional] 
**occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the beneficial owner. | [optional] 
**annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the beneficial owner. | [optional] 
**source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the beneficial owner. | [optional] 

## Example

```python
from unit_finance_sdk.models.beneficial_owner_type import BeneficialOwnerType

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficialOwnerType from a JSON string
beneficial_owner_type_instance = BeneficialOwnerType.from_json(json)
# print the JSON string representation of the object
print(BeneficialOwnerType.to_json())

# convert the object into a dict
beneficial_owner_type_dict = beneficial_owner_type_instance.to_dict()
# create an instance of BeneficialOwnerType from a dict
beneficial_owner_type_from_dict = BeneficialOwnerType.from_dict(beneficial_owner_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


