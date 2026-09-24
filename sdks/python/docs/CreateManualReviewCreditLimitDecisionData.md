# CreateManualReviewCreditLimitDecisionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateManualReviewCreditLimitDecisionDataAttributes**](CreateManualReviewCreditLimitDecisionDataAttributes.md) |  | 
**relationships** | [**CreateApprovedCreditLimitDecisionDataRelationships**](CreateApprovedCreditLimitDecisionDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_manual_review_credit_limit_decision_data import CreateManualReviewCreditLimitDecisionData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManualReviewCreditLimitDecisionData from a JSON string
create_manual_review_credit_limit_decision_data_instance = CreateManualReviewCreditLimitDecisionData.from_json(json)
# print the JSON string representation of the object
print(CreateManualReviewCreditLimitDecisionData.to_json())

# convert the object into a dict
create_manual_review_credit_limit_decision_data_dict = create_manual_review_credit_limit_decision_data_instance.to_dict()
# create an instance of CreateManualReviewCreditLimitDecisionData from a dict
create_manual_review_credit_limit_decision_data_from_dict = CreateManualReviewCreditLimitDecisionData.from_dict(create_manual_review_credit_limit_decision_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


