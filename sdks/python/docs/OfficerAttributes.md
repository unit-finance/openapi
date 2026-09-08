# OfficerAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | One of Approved, Denied or PendingReview. | 
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the officer. | 
**title** | **str** | Title of the officer. One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | 
**ssn** | **str** | SSN (or ITIN) of the officer (numbers only). Either an ssn or passport is required. | [optional] 
**passport** | **str** | Passport number of the officer. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] 
**nationality** | **str** | Required if a passport is used as the main ID and optional when ssn is used. Two letters representing the officer&#39;s nationality. (e.g. \&quot;US\&quot;). | [optional] 
**date_of_birth** | **date** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | The officer&#39;s address. | 
**phone** | [**PhoneType**](PhoneType.md) | The officer&#39;s phone number. | 
**email** | **str** | The officer&#39;s email address. | 
**occupation** | [**OccupationType**](OccupationType.md) | Optional. Occupation of the officer. | [optional] 
**annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Optional. Annual income of the officer. | [optional] 
**source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Optional. Source of income of the officer. | [optional] 

## Example

```python
from unit_finance_sdk.models.officer_attributes import OfficerAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of OfficerAttributes from a JSON string
officer_attributes_instance = OfficerAttributes.from_json(json)
# print the JSON string representation of the object
print(OfficerAttributes.to_json())

# convert the object into a dict
officer_attributes_dict = officer_attributes_instance.to_dict()
# create an instance of OfficerAttributes from a dict
officer_attributes_from_dict = OfficerAttributes.from_dict(officer_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


