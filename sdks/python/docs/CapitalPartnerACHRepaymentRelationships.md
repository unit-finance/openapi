# CapitalPartnerACHRepaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_account** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**payment** | [**Relationship**](Relationship.md) |  | [optional] 
**recurring_repayment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.capital_partner_ach_repayment_relationships import CapitalPartnerACHRepaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CapitalPartnerACHRepaymentRelationships from a JSON string
capital_partner_ach_repayment_relationships_instance = CapitalPartnerACHRepaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(CapitalPartnerACHRepaymentRelationships.to_json())

# convert the object into a dict
capital_partner_ach_repayment_relationships_dict = capital_partner_ach_repayment_relationships_instance.to_dict()
# create an instance of CapitalPartnerACHRepaymentRelationships from a dict
capital_partner_ach_repayment_relationships_from_dict = CapitalPartnerACHRepaymentRelationships.from_dict(capital_partner_ach_repayment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


