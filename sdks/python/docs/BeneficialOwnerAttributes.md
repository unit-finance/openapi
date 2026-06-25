# BeneficialOwnerAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | One of Approved, Denied or PendingReview. | 
**full_name** | [**FullName**](FullName.md) | Full name of the beneficial owner. | 
**ssn** | **str** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] 
**passport** | **str** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] 
**nationality** | **str** | Always when Passport is populated and optional when SSN is populated. Two letters representing the beneficial owner&#39;s nationality. | [optional] 
**date_of_birth** | **date** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**Address**](Address.md) | The beneficial owner&#39;s address. | 
**phone** | [**Phone**](Phone.md) | The beneficial owner&#39;s phone number. | 
**email** | **str** | The beneficial owner&#39;s email address. | 
**occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the beneficial owner. | [optional] 
**annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the beneficial owner. | [optional] 
**source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the beneficial owner. | [optional] 

## Example

```python
from unit_finance_sdk.models.beneficial_owner_attributes import BeneficialOwnerAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficialOwnerAttributes from a JSON string
beneficial_owner_attributes_instance = BeneficialOwnerAttributes.from_json(json)
# print the JSON string representation of the object
print(BeneficialOwnerAttributes.to_json())

# convert the object into a dict
beneficial_owner_attributes_dict = beneficial_owner_attributes_instance.to_dict()
# create an instance of BeneficialOwnerAttributes from a dict
beneficial_owner_attributes_from_dict = BeneficialOwnerAttributes.from_dict(beneficial_owner_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


