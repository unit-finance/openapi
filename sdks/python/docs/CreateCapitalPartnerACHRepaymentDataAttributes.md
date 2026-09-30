# CreateCapitalPartnerACHRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | 
**amount** | **int** | The amount to repay. | 
**addenda** | **str** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**same_day** | **bool** | Optional, default is false. See Same Day ACH. | [optional] 
**sec_code** | **str** | See Use a custom SEC Code. | [optional] 
**idempotency_key** | **str** | See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_capital_partner_ach_repayment_data_attributes import CreateCapitalPartnerACHRepaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCapitalPartnerACHRepaymentDataAttributes from a JSON string
create_capital_partner_ach_repayment_data_attributes_instance = CreateCapitalPartnerACHRepaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCapitalPartnerACHRepaymentDataAttributes.to_json())

# convert the object into a dict
create_capital_partner_ach_repayment_data_attributes_dict = create_capital_partner_ach_repayment_data_attributes_instance.to_dict()
# create an instance of CreateCapitalPartnerACHRepaymentDataAttributes from a dict
create_capital_partner_ach_repayment_data_attributes_from_dict = CreateCapitalPartnerACHRepaymentDataAttributes.from_dict(create_capital_partner_ach_repayment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


