# CreateRecurringCapitalPartnerBookRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Repayment description (maximum of 50 characters), this will show up on the statement of the counterparty. | 
**transaction_summary_override** | **str** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] 
**idempotency_key** | **str** | See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Tags that will be copied to any transaction that this recurring repayment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_recurring_capital_partner_book_repayment_data_attributes import CreateRecurringCapitalPartnerBookRepaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCapitalPartnerBookRepaymentDataAttributes from a JSON string
create_recurring_capital_partner_book_repayment_data_attributes_instance = CreateRecurringCapitalPartnerBookRepaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCapitalPartnerBookRepaymentDataAttributes.to_json())

# convert the object into a dict
create_recurring_capital_partner_book_repayment_data_attributes_dict = create_recurring_capital_partner_book_repayment_data_attributes_instance.to_dict()
# create an instance of CreateRecurringCapitalPartnerBookRepaymentDataAttributes from a dict
create_recurring_capital_partner_book_repayment_data_attributes_from_dict = CreateRecurringCapitalPartnerBookRepaymentDataAttributes.from_dict(create_recurring_capital_partner_book_repayment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


