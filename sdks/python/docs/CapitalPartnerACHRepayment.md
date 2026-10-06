# CapitalPartnerACHRepayment

`capitalPartnerAchRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ACHRepaymentAttributes**](ACHRepaymentAttributes.md) |  | 
**relationships** | [**CapitalPartnerACHRepaymentRelationships**](CapitalPartnerACHRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.capital_partner_ach_repayment import CapitalPartnerACHRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of CapitalPartnerACHRepayment from a JSON string
capital_partner_ach_repayment_instance = CapitalPartnerACHRepayment.from_json(json)
# print the JSON string representation of the object
print(CapitalPartnerACHRepayment.to_json())

# convert the object into a dict
capital_partner_ach_repayment_dict = capital_partner_ach_repayment_instance.to_dict()
# create an instance of CapitalPartnerACHRepayment from a dict
capital_partner_ach_repayment_from_dict = CapitalPartnerACHRepayment.from_dict(capital_partner_ach_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


