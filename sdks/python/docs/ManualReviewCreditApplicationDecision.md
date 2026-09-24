# ManualReviewCreditApplicationDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ManualReviewCreditApplicationDecisionAttributes**](ManualReviewCreditApplicationDecisionAttributes.md) |  | 
**relationships** | [**DeniedCreditApplicationDecisionRelationships**](DeniedCreditApplicationDecisionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.manual_review_credit_application_decision import ManualReviewCreditApplicationDecision

# TODO update the JSON string below
json = "{}"
# create an instance of ManualReviewCreditApplicationDecision from a JSON string
manual_review_credit_application_decision_instance = ManualReviewCreditApplicationDecision.from_json(json)
# print the JSON string representation of the object
print(ManualReviewCreditApplicationDecision.to_json())

# convert the object into a dict
manual_review_credit_application_decision_dict = manual_review_credit_application_decision_instance.to_dict()
# create an instance of ManualReviewCreditApplicationDecision from a dict
manual_review_credit_application_decision_from_dict = ManualReviewCreditApplicationDecision.from_dict(manual_review_credit_application_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


