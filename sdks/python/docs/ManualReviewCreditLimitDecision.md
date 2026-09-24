# ManualReviewCreditLimitDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ManualReviewCreditLimitDecisionAttributes**](ManualReviewCreditLimitDecisionAttributes.md) |  | 
**relationships** | [**ApprovedCreditLimitDecisionRelationships**](ApprovedCreditLimitDecisionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.manual_review_credit_limit_decision import ManualReviewCreditLimitDecision

# TODO update the JSON string below
json = "{}"
# create an instance of ManualReviewCreditLimitDecision from a JSON string
manual_review_credit_limit_decision_instance = ManualReviewCreditLimitDecision.from_json(json)
# print the JSON string representation of the object
print(ManualReviewCreditLimitDecision.to_json())

# convert the object into a dict
manual_review_credit_limit_decision_dict = manual_review_credit_limit_decision_instance.to_dict()
# create an instance of ManualReviewCreditLimitDecision from a dict
manual_review_credit_limit_decision_from_dict = ManualReviewCreditLimitDecision.from_dict(manual_review_credit_limit_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


