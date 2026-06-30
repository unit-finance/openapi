# BeneficialOwnerRequestType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the beneficial owner. | 
**ssn** | **str** | SSN of the beneficial owner (numbers only). One of ssn or passport is required. | [optional] 
**passport** | **str** | Passport of the beneficial owner. One of ssn or passport is required. | [optional] 
**nationality** | **str** | Required when passport is populated. Two letters representing the beneficial owner&#39;s nationality. | [optional] 
**date_of_birth** | **str** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | The beneficial owner&#39;s address. | 
**phone** | [**PhoneType**](PhoneType.md) | The beneficial owner&#39;s phone number. | 
**email** | **str** | The beneficial owner&#39;s email address. | 
**percentage** | **int** | The percentage of ownership of the beneficial owner (between 25 and 100). | [optional] 
**occupation** | **str** | Optional. Occupation of the beneficial owner. | [optional] 
**annual_income** | **str** | Optional. Annual income of the beneficial owner. | [optional] 
**source_of_income** | **str** | Optional. Source of income of the beneficial owner. | [optional] 

## Example

```python
from unit_finance_sdk.models.beneficial_owner_request_type import BeneficialOwnerRequestType

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficialOwnerRequestType from a JSON string
beneficial_owner_request_type_instance = BeneficialOwnerRequestType.from_json(json)
# print the JSON string representation of the object
print(BeneficialOwnerRequestType.to_json())

# convert the object into a dict
beneficial_owner_request_type_dict = beneficial_owner_request_type_instance.to_dict()
# create an instance of BeneficialOwnerRequestType from a dict
beneficial_owner_request_type_from_dict = BeneficialOwnerRequestType.from_dict(beneficial_owner_request_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


