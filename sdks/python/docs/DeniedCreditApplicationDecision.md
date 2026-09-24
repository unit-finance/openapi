# DeniedCreditApplicationDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**DeniedCreditApplicationDecisionAttributes**](DeniedCreditApplicationDecisionAttributes.md) |  | 
**relationships** | [**DeniedCreditApplicationDecisionRelationships**](DeniedCreditApplicationDecisionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.denied_credit_application_decision import DeniedCreditApplicationDecision

# TODO update the JSON string below
json = "{}"
# create an instance of DeniedCreditApplicationDecision from a JSON string
denied_credit_application_decision_instance = DeniedCreditApplicationDecision.from_json(json)
# print the JSON string representation of the object
print(DeniedCreditApplicationDecision.to_json())

# convert the object into a dict
denied_credit_application_decision_dict = denied_credit_application_decision_instance.to_dict()
# create an instance of DeniedCreditApplicationDecision from a dict
denied_credit_application_decision_from_dict = DeniedCreditApplicationDecision.from_dict(denied_credit_application_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


