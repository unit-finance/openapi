# CreateApprovedCreditLimitDecisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateApprovedCreditLimitDecisionData**](CreateApprovedCreditLimitDecisionData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_approved_credit_limit_decision_request import CreateApprovedCreditLimitDecisionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateApprovedCreditLimitDecisionRequest from a JSON string
create_approved_credit_limit_decision_request_instance = CreateApprovedCreditLimitDecisionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateApprovedCreditLimitDecisionRequest.to_json())

# convert the object into a dict
create_approved_credit_limit_decision_request_dict = create_approved_credit_limit_decision_request_instance.to_dict()
# create an instance of CreateApprovedCreditLimitDecisionRequest from a dict
create_approved_credit_limit_decision_request_from_dict = CreateApprovedCreditLimitDecisionRequest.from_dict(create_approved_credit_limit_decision_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


