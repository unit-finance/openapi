# BeneficialOwner2


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
**percentage** | **int** | The percentage of ownership of the beneficial owner. | [optional] 
**occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the beneficial owner. | [optional] 
**annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the beneficial owner. | [optional] 
**source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the beneficial owner. | [optional] 

## Example

```python
from unit_finance_sdk.models.beneficial_owner2 import BeneficialOwner2

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficialOwner2 from a JSON string
beneficial_owner2_instance = BeneficialOwner2.from_json(json)
# print the JSON string representation of the object
print(BeneficialOwner2.to_json())

# convert the object into a dict
beneficial_owner2_dict = beneficial_owner2_instance.to_dict()
# create an instance of BeneficialOwner2 from a dict
beneficial_owner2_from_dict = BeneficialOwner2.from_dict(beneficial_owner2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


