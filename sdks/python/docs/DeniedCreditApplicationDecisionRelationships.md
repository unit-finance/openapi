# DeniedCreditApplicationDecisionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**Relationship**](Relationship.md) |  | [optional] 
**credit_application** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.denied_credit_application_decision_relationships import DeniedCreditApplicationDecisionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of DeniedCreditApplicationDecisionRelationships from a JSON string
denied_credit_application_decision_relationships_instance = DeniedCreditApplicationDecisionRelationships.from_json(json)
# print the JSON string representation of the object
print(DeniedCreditApplicationDecisionRelationships.to_json())

# convert the object into a dict
denied_credit_application_decision_relationships_dict = denied_credit_application_decision_relationships_instance.to_dict()
# create an instance of DeniedCreditApplicationDecisionRelationships from a dict
denied_credit_application_decision_relationships_from_dict = DeniedCreditApplicationDecisionRelationships.from_dict(denied_credit_application_decision_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


