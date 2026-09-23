# ApprovedCreditLimitDecisionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**credit_application** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.approved_credit_limit_decision_relationships import ApprovedCreditLimitDecisionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ApprovedCreditLimitDecisionRelationships from a JSON string
approved_credit_limit_decision_relationships_instance = ApprovedCreditLimitDecisionRelationships.from_json(json)
# print the JSON string representation of the object
print(ApprovedCreditLimitDecisionRelationships.to_json())

# convert the object into a dict
approved_credit_limit_decision_relationships_dict = approved_credit_limit_decision_relationships_instance.to_dict()
# create an instance of ApprovedCreditLimitDecisionRelationships from a dict
approved_credit_limit_decision_relationships_from_dict = ApprovedCreditLimitDecisionRelationships.from_dict(approved_credit_limit_decision_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


