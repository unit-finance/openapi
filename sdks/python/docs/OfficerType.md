# OfficerType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | One of Approved, Denied or PendingReview. | [optional] 
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the officer. | 
**title** | **str** | Title of the officer. One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | [optional] 
**ssn** | **str** | SSN of the officer (numbers only). One of ssn or passport is required. | [optional] 
**passport** | **str** | Passport of the officer. One of ssn or passport is required. | [optional] 
**nationality** | **str** | Always when Passport is populated and optional when SSN is populated. Two letters representing the officer&#39;s nationality. | [optional] 
**date_of_birth** | **date** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | The officer&#39;s address. | 
**phone** | [**PhoneType**](PhoneType.md) | The officer&#39;s phone number. | 
**email** | **str** | The officer&#39;s email address. | 
**id_theft_score** | **float** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). | [optional] 
**occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the officer. | [optional] 
**annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the officer. | [optional] 
**source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the officer. | [optional] 
**created_at** | **datetime** | Optional. Date and time the officer was created (full timestamp, e.g. 2026-09-09T13:09:03.379Z). | [optional] 

## Example

```python
from unit_finance_sdk.models.officer_type import OfficerType

# TODO update the JSON string below
json = "{}"
# create an instance of OfficerType from a JSON string
officer_type_instance = OfficerType.from_json(json)
# print the JSON string representation of the object
print(OfficerType.to_json())

# convert the object into a dict
officer_type_dict = officer_type_instance.to_dict()
# create an instance of OfficerType from a dict
officer_type_from_dict = OfficerType.from_dict(officer_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


