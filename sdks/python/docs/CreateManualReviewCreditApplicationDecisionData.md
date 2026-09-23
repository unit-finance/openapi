# CreateManualReviewCreditApplicationDecisionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateManualReviewCreditApplicationDecisionDataAttributes**](CreateManualReviewCreditApplicationDecisionDataAttributes.md) |  | 
**relationships** | [**CreateApprovedCreditLimitDecisionDataRelationships**](CreateApprovedCreditLimitDecisionDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_manual_review_credit_application_decision_data import CreateManualReviewCreditApplicationDecisionData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManualReviewCreditApplicationDecisionData from a JSON string
create_manual_review_credit_application_decision_data_instance = CreateManualReviewCreditApplicationDecisionData.from_json(json)
# print the JSON string representation of the object
print(CreateManualReviewCreditApplicationDecisionData.to_json())

# convert the object into a dict
create_manual_review_credit_application_decision_data_dict = create_manual_review_credit_application_decision_data_instance.to_dict()
# create an instance of CreateManualReviewCreditApplicationDecisionData from a dict
create_manual_review_credit_application_decision_data_from_dict = CreateManualReviewCreditApplicationDecisionData.from_dict(create_manual_review_credit_application_decision_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


