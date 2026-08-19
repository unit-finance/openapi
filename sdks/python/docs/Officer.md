# Officer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | One of Approved, Denied or PendingReview. | 
**full_name** | [**FullName**](FullName.md) | Full name of the officer. | 
**title** | **str** | One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | 
**ssn** | **str** | SSN of the officer (numbers only). One of ssn or passport is required. | [optional] 
**passport** | **str** | Passport of the officer. One of ssn or passport is required. | [optional] 
**nationality** | **str** | Always when Passport is populated and optional when SSN is populated. Two letters representing the officer&#39;s nationality. | [optional] 
**date_of_birth** | **date** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**Address**](Address.md) | The officer&#39;s address. | 
**phone** | [**Phone**](Phone.md) | The officer&#39;s phone number. | 
**email** | **str** | The officer&#39;s email address. | 
**id_theft_score** | **float** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). | [optional] 
**occupation** | [**Occupation**](Occupation.md) | Optional. Occupation of the officer. | [optional] 
**annual_income** | [**AnnualIncome**](AnnualIncome.md) | Optional. Annual income of the officer. | [optional] 
**source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Optional. Source of income of the officer. | [optional] 

## Example

```python
from unit_finance_sdk.models.officer import Officer

# TODO update the JSON string below
json = "{}"
# create an instance of Officer from a JSON string
officer_instance = Officer.from_json(json)
# print the JSON string representation of the object
print(Officer.to_json())

# convert the object into a dict
officer_dict = officer_instance.to_dict()
# create an instance of Officer from a dict
officer_from_dict = Officer.from_dict(officer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


