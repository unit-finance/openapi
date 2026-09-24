# CreateDeniedCreditApplicationDecisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateDeniedCreditApplicationDecisionData**](CreateDeniedCreditApplicationDecisionData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_denied_credit_application_decision_request import CreateDeniedCreditApplicationDecisionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeniedCreditApplicationDecisionRequest from a JSON string
create_denied_credit_application_decision_request_instance = CreateDeniedCreditApplicationDecisionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeniedCreditApplicationDecisionRequest.to_json())

# convert the object into a dict
create_denied_credit_application_decision_request_dict = create_denied_credit_application_decision_request_instance.to_dict()
# create an instance of CreateDeniedCreditApplicationDecisionRequest from a dict
create_denied_credit_application_decision_request_from_dict = CreateDeniedCreditApplicationDecisionRequest.from_dict(create_denied_credit_application_decision_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


