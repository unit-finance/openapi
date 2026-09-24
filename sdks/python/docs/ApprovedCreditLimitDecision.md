# ApprovedCreditLimitDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ApprovedCreditLimitDecisionAttributes**](ApprovedCreditLimitDecisionAttributes.md) |  | 
**relationships** | [**ApprovedCreditLimitDecisionRelationships**](ApprovedCreditLimitDecisionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.approved_credit_limit_decision import ApprovedCreditLimitDecision

# TODO update the JSON string below
json = "{}"
# create an instance of ApprovedCreditLimitDecision from a JSON string
approved_credit_limit_decision_instance = ApprovedCreditLimitDecision.from_json(json)
# print the JSON string representation of the object
print(ApprovedCreditLimitDecision.to_json())

# convert the object into a dict
approved_credit_limit_decision_dict = approved_credit_limit_decision_instance.to_dict()
# create an instance of ApprovedCreditLimitDecision from a dict
approved_credit_limit_decision_from_dict = ApprovedCreditLimitDecision.from_dict(approved_credit_limit_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


