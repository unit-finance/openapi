# CreateCreditDecisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateManualReviewCreditApplicationDecisionData**](CreateManualReviewCreditApplicationDecisionData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_credit_decision_request import CreateCreditDecisionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCreditDecisionRequest from a JSON string
create_credit_decision_request_instance = CreateCreditDecisionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCreditDecisionRequest.to_json())

# convert the object into a dict
create_credit_decision_request_dict = create_credit_decision_request_instance.to_dict()
# create an instance of CreateCreditDecisionRequest from a dict
create_credit_decision_request_from_dict = CreateCreditDecisionRequest.from_dict(create_credit_decision_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


