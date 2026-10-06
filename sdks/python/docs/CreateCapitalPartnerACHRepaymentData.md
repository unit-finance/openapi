# CreateCapitalPartnerACHRepaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCapitalPartnerACHRepaymentDataAttributes**](CreateCapitalPartnerACHRepaymentDataAttributes.md) |  | 
**relationships** | [**CreateRecurringCapitalPartnerACHRepaymentDataRelationships**](CreateRecurringCapitalPartnerACHRepaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_capital_partner_ach_repayment_data import CreateCapitalPartnerACHRepaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCapitalPartnerACHRepaymentData from a JSON string
create_capital_partner_ach_repayment_data_instance = CreateCapitalPartnerACHRepaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateCapitalPartnerACHRepaymentData.to_json())

# convert the object into a dict
create_capital_partner_ach_repayment_data_dict = create_capital_partner_ach_repayment_data_instance.to_dict()
# create an instance of CreateCapitalPartnerACHRepaymentData from a dict
create_capital_partner_ach_repayment_data_from_dict = CreateCapitalPartnerACHRepaymentData.from_dict(create_capital_partner_ach_repayment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


