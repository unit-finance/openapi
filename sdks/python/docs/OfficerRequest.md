# OfficerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | [**FullName**](FullName.md) | Full name of the officer. | 
**title** | **str** | One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | 
**ssn** | **str** | SSN of the officer (numbers only). One of ssn or passport is required. | [optional] 
**passport** | **str** | Passport of the officer. One of ssn or passport is required. | [optional] 
**nationality** | **str** | Required when passport is populated. Two letters representing the officer&#39;s nationality. | [optional] 
**date_of_birth** | **str** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**Address**](Address.md) | The officer&#39;s address. | 
**phone** | [**Phone**](Phone.md) | The officer&#39;s phone number. | 
**email** | **str** | The officer&#39;s email address. | 
**occupation** | **str** | Optional. Occupation of the officer. | [optional] 
**annual_income** | **str** | Optional. Annual income of the officer. | [optional] 
**source_of_income** | **str** | Optional. Source of income of the officer. | [optional] 

## Example

```python
from unit_finance_sdk.models.officer_request import OfficerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OfficerRequest from a JSON string
officer_request_instance = OfficerRequest.from_json(json)
# print the JSON string representation of the object
print(OfficerRequest.to_json())

# convert the object into a dict
officer_request_dict = officer_request_instance.to_dict()
# create an instance of OfficerRequest from a dict
officer_request_from_dict = OfficerRequest.from_dict(officer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


