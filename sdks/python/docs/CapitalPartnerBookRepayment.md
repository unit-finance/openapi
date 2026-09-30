# CapitalPartnerBookRepayment

`capitalPartnerBookRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ACHRepaymentAttributes**](ACHRepaymentAttributes.md) |  | 
**relationships** | [**CapitalPartnerBookRepaymentRelationships**](CapitalPartnerBookRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.capital_partner_book_repayment import CapitalPartnerBookRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of CapitalPartnerBookRepayment from a JSON string
capital_partner_book_repayment_instance = CapitalPartnerBookRepayment.from_json(json)
# print the JSON string representation of the object
print(CapitalPartnerBookRepayment.to_json())

# convert the object into a dict
capital_partner_book_repayment_dict = capital_partner_book_repayment_instance.to_dict()
# create an instance of CapitalPartnerBookRepayment from a dict
capital_partner_book_repayment_from_dict = CapitalPartnerBookRepayment.from_dict(capital_partner_book_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


