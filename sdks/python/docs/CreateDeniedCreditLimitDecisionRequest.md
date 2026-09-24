# CreateDeniedCreditLimitDecisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateDeniedCreditLimitDecisionData**](CreateDeniedCreditLimitDecisionData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_denied_credit_limit_decision_request import CreateDeniedCreditLimitDecisionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeniedCreditLimitDecisionRequest from a JSON string
create_denied_credit_limit_decision_request_instance = CreateDeniedCreditLimitDecisionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeniedCreditLimitDecisionRequest.to_json())

# convert the object into a dict
create_denied_credit_limit_decision_request_dict = create_denied_credit_limit_decision_request_instance.to_dict()
# create an instance of CreateDeniedCreditLimitDecisionRequest from a dict
create_denied_credit_limit_decision_request_from_dict = CreateDeniedCreditLimitDecisionRequest.from_dict(create_denied_credit_limit_decision_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


