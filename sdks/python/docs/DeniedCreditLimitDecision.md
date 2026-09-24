# DeniedCreditLimitDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ApprovedCreditLimitDecisionAttributes**](ApprovedCreditLimitDecisionAttributes.md) |  | 
**relationships** | [**ApprovedCreditLimitDecisionRelationships**](ApprovedCreditLimitDecisionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.denied_credit_limit_decision import DeniedCreditLimitDecision

# TODO update the JSON string below
json = "{}"
# create an instance of DeniedCreditLimitDecision from a JSON string
denied_credit_limit_decision_instance = DeniedCreditLimitDecision.from_json(json)
# print the JSON string representation of the object
print(DeniedCreditLimitDecision.to_json())

# convert the object into a dict
denied_credit_limit_decision_dict = denied_credit_limit_decision_instance.to_dict()
# create an instance of DeniedCreditLimitDecision from a dict
denied_credit_limit_decision_from_dict = DeniedCreditLimitDecision.from_dict(denied_credit_limit_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


