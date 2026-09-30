# CapitalPartnerBookRepaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_account** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**payment** | [**Relationship**](Relationship.md) |  | [optional] 
**recurring_repayment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.capital_partner_book_repayment_relationships import CapitalPartnerBookRepaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CapitalPartnerBookRepaymentRelationships from a JSON string
capital_partner_book_repayment_relationships_instance = CapitalPartnerBookRepaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(CapitalPartnerBookRepaymentRelationships.to_json())

# convert the object into a dict
capital_partner_book_repayment_relationships_dict = capital_partner_book_repayment_relationships_instance.to_dict()
# create an instance of CapitalPartnerBookRepaymentRelationships from a dict
capital_partner_book_repayment_relationships_from_dict = CapitalPartnerBookRepaymentRelationships.from_dict(capital_partner_book_repayment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


