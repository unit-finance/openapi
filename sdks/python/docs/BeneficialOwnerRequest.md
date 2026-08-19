# BeneficialOwnerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | [**FullName**](FullName.md) | Full name of the beneficial owner. | 
**ssn** | **str** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] 
**passport** | **str** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] 
**nationality** | **str** | Required when passport is populated. Two letters representing the beneficial owner&#39;s nationality. | [optional] 
**date_of_birth** | **str** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**Address**](Address.md) | The beneficial owner&#39;s address. | 
**phone** | [**Phone**](Phone.md) | The beneficial owner&#39;s phone number. | 
**email** | **str** | The beneficial owner&#39;s email address. | 
**percentage** | **int** | The percentage of ownership of the beneficial owner (between 25 and 100). | [optional] 
**occupation** | **str** | Optional. Occupation of the beneficial owner. | [optional] 
**annual_income** | **str** | Optional. Annual income of the beneficial owner. | [optional] 
**source_of_income** | **str** | Optional. Source of income of the beneficial owner. | [optional] 

## Example

```python
from unit_finance_sdk.models.beneficial_owner_request import BeneficialOwnerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficialOwnerRequest from a JSON string
beneficial_owner_request_instance = BeneficialOwnerRequest.from_json(json)
# print the JSON string representation of the object
print(BeneficialOwnerRequest.to_json())

# convert the object into a dict
beneficial_owner_request_dict = beneficial_owner_request_instance.to_dict()
# create an instance of BeneficialOwnerRequest from a dict
beneficial_owner_request_from_dict = BeneficialOwnerRequest.from_dict(beneficial_owner_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


