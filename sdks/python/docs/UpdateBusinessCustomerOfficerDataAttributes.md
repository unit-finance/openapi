# UpdateBusinessCustomerOfficerDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | Title of the officer. One of CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. | [optional] 
**occupation** | [**OccupationType**](OccupationType.md) | Occupation of the officer. | [optional] 
**annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Annual income of the officer. | [optional] 
**source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Source of income of the officer. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_business_customer_officer_data_attributes import UpdateBusinessCustomerOfficerDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessCustomerOfficerDataAttributes from a JSON string
update_business_customer_officer_data_attributes_instance = UpdateBusinessCustomerOfficerDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessCustomerOfficerDataAttributes.to_json())

# convert the object into a dict
update_business_customer_officer_data_attributes_dict = update_business_customer_officer_data_attributes_instance.to_dict()
# create an instance of UpdateBusinessCustomerOfficerDataAttributes from a dict
update_business_customer_officer_data_attributes_from_dict = UpdateBusinessCustomerOfficerDataAttributes.from_dict(update_business_customer_officer_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


