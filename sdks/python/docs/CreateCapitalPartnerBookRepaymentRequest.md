# CreateCapitalPartnerBookRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCapitalPartnerBookRepaymentData**](CreateCapitalPartnerBookRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_capital_partner_book_repayment_request import CreateCapitalPartnerBookRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCapitalPartnerBookRepaymentRequest from a JSON string
create_capital_partner_book_repayment_request_instance = CreateCapitalPartnerBookRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCapitalPartnerBookRepaymentRequest.to_json())

# convert the object into a dict
create_capital_partner_book_repayment_request_dict = create_capital_partner_book_repayment_request_instance.to_dict()
# create an instance of CreateCapitalPartnerBookRepaymentRequest from a dict
create_capital_partner_book_repayment_request_from_dict = CreateCapitalPartnerBookRepaymentRequest.from_dict(create_capital_partner_book_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


