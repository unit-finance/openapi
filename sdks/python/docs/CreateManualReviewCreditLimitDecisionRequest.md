# CreateManualReviewCreditLimitDecisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateManualReviewCreditLimitDecisionData**](CreateManualReviewCreditLimitDecisionData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_manual_review_credit_limit_decision_request import CreateManualReviewCreditLimitDecisionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManualReviewCreditLimitDecisionRequest from a JSON string
create_manual_review_credit_limit_decision_request_instance = CreateManualReviewCreditLimitDecisionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateManualReviewCreditLimitDecisionRequest.to_json())

# convert the object into a dict
create_manual_review_credit_limit_decision_request_dict = create_manual_review_credit_limit_decision_request_instance.to_dict()
# create an instance of CreateManualReviewCreditLimitDecisionRequest from a dict
create_manual_review_credit_limit_decision_request_from_dict = CreateManualReviewCreditLimitDecisionRequest.from_dict(create_manual_review_credit_limit_decision_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


