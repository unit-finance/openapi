# CreateManualReviewCreditApplicationDecisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateManualReviewCreditApplicationDecisionData**](CreateManualReviewCreditApplicationDecisionData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_manual_review_credit_application_decision_request import CreateManualReviewCreditApplicationDecisionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManualReviewCreditApplicationDecisionRequest from a JSON string
create_manual_review_credit_application_decision_request_instance = CreateManualReviewCreditApplicationDecisionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateManualReviewCreditApplicationDecisionRequest.to_json())

# convert the object into a dict
create_manual_review_credit_application_decision_request_dict = create_manual_review_credit_application_decision_request_instance.to_dict()
# create an instance of CreateManualReviewCreditApplicationDecisionRequest from a dict
create_manual_review_credit_application_decision_request_from_dict = CreateManualReviewCreditApplicationDecisionRequest.from_dict(create_manual_review_credit_application_decision_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


