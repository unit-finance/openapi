# CreateCapitalPartnerACHRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCapitalPartnerACHRepaymentData**](CreateCapitalPartnerACHRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_capital_partner_ach_repayment_request import CreateCapitalPartnerACHRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCapitalPartnerACHRepaymentRequest from a JSON string
create_capital_partner_ach_repayment_request_instance = CreateCapitalPartnerACHRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCapitalPartnerACHRepaymentRequest.to_json())

# convert the object into a dict
create_capital_partner_ach_repayment_request_dict = create_capital_partner_ach_repayment_request_instance.to_dict()
# create an instance of CreateCapitalPartnerACHRepaymentRequest from a dict
create_capital_partner_ach_repayment_request_from_dict = CreateCapitalPartnerACHRepaymentRequest.from_dict(create_capital_partner_ach_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


