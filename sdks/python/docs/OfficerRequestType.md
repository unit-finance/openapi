# OfficerRequestType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the officer. | 
**title** | **str** | One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | 
**ssn** | **str** | SSN of the officer (numbers only). One of ssn or passport is required. | [optional] 
**passport** | **str** | Passport of the officer. One of ssn or passport is required. | [optional] 
**nationality** | **str** | Required when passport is populated. Two letters representing the officer&#39;s nationality. | [optional] 
**date_of_birth** | **str** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | The officer&#39;s address. | 
**phone** | [**PhoneType**](PhoneType.md) | The officer&#39;s phone number. | 
**email** | **str** | The officer&#39;s email address. | 
**occupation** | **str** | Optional. Occupation of the officer. | [optional] 
**annual_income** | **str** | Optional. Annual income of the officer. | [optional] 
**source_of_income** | **str** | Optional. Source of income of the officer. | [optional] 

## Example

```python
from unit_finance_sdk.models.officer_request_type import OfficerRequestType

# TODO update the JSON string below
json = "{}"
# create an instance of OfficerRequestType from a JSON string
officer_request_type_instance = OfficerRequestType.from_json(json)
# print the JSON string representation of the object
print(OfficerRequestType.to_json())

# convert the object into a dict
officer_request_type_dict = officer_request_type_instance.to_dict()
# create an instance of OfficerRequestType from a dict
officer_request_type_from_dict = OfficerRequestType.from_dict(officer_request_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


