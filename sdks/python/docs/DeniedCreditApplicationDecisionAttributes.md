# DeniedCreditApplicationDecisionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**external_application_id** | **str** | Identifier for client&#39;s credit evaluation related to this decision. Max 200 char. | 
**evaluation_type** | **str** | The type of credit decision. This is always CreditApplication. | 
**submission_timestamp** | **datetime** | Timestamp when the corresponding credit application was submitted. | 
**decision_timestamp** | **datetime** | Timestamp when the credit decision was made. | 
**decision** | **str** | The Decision for this credit application. | 
**policy_exception** | **bool** | One of true or false. | 
**policy_exception_reason** | **str** | Conditional if policyException is true. Brief description of reason for policy exception. Max 200 char. | [optional] 
**additional_underwriting_data** | **Dict[str, object]** | Object containing key-value pairs of underwriting data per credit policy. | [optional] 

## Example

```python
from unit_finance_sdk.models.denied_credit_application_decision_attributes import DeniedCreditApplicationDecisionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DeniedCreditApplicationDecisionAttributes from a JSON string
denied_credit_application_decision_attributes_instance = DeniedCreditApplicationDecisionAttributes.from_json(json)
# print the JSON string representation of the object
print(DeniedCreditApplicationDecisionAttributes.to_json())

# convert the object into a dict
denied_credit_application_decision_attributes_dict = denied_credit_application_decision_attributes_instance.to_dict()
# create an instance of DeniedCreditApplicationDecisionAttributes from a dict
denied_credit_application_decision_attributes_from_dict = DeniedCreditApplicationDecisionAttributes.from_dict(denied_credit_application_decision_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


