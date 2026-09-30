# CreateRecurringCapitalPartnerBookRepaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateRecurringCapitalPartnerBookRepaymentDataAttributes**](CreateRecurringCapitalPartnerBookRepaymentDataAttributes.md) |  | 
**relationships** | [**CreateRecurringCapitalPartnerBookRepaymentDataRelationships**](CreateRecurringCapitalPartnerBookRepaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_capital_partner_book_repayment_data import CreateRecurringCapitalPartnerBookRepaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCapitalPartnerBookRepaymentData from a JSON string
create_recurring_capital_partner_book_repayment_data_instance = CreateRecurringCapitalPartnerBookRepaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCapitalPartnerBookRepaymentData.to_json())

# convert the object into a dict
create_recurring_capital_partner_book_repayment_data_dict = create_recurring_capital_partner_book_repayment_data_instance.to_dict()
# create an instance of CreateRecurringCapitalPartnerBookRepaymentData from a dict
create_recurring_capital_partner_book_repayment_data_from_dict = CreateRecurringCapitalPartnerBookRepaymentData.from_dict(create_recurring_capital_partner_book_repayment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


