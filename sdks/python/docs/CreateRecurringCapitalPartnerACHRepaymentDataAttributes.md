# CreateRecurringCapitalPartnerACHRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Repayment description (maximum of 50 characters), this will show up on the statement of the counterparty. | 
**addenda** | **str** | Optional, additional repayment description (maximum of 80 characters), not all institutions present that in the description. | [optional] 
**same_day** | **bool** | Optional, default is false. See Same Day ACH. | [optional] 
**sec_code** | **str** | See Use a custom SEC Code. | [optional] 
**idempotency_key** | **str** | See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Tags that will be copied to any transaction that this recurring repayment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_recurring_capital_partner_ach_repayment_data_attributes import CreateRecurringCapitalPartnerACHRepaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCapitalPartnerACHRepaymentDataAttributes from a JSON string
create_recurring_capital_partner_ach_repayment_data_attributes_instance = CreateRecurringCapitalPartnerACHRepaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCapitalPartnerACHRepaymentDataAttributes.to_json())

# convert the object into a dict
create_recurring_capital_partner_ach_repayment_data_attributes_dict = create_recurring_capital_partner_ach_repayment_data_attributes_instance.to_dict()
# create an instance of CreateRecurringCapitalPartnerACHRepaymentDataAttributes from a dict
create_recurring_capital_partner_ach_repayment_data_attributes_from_dict = CreateRecurringCapitalPartnerACHRepaymentDataAttributes.from_dict(create_recurring_capital_partner_ach_repayment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


