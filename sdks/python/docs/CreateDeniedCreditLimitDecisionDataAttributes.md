# CreateDeniedCreditLimitDecisionDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_application_id** | **str** | Identifier for client&#39;s credit evaluation related to this decision. Max 200 char. | 
**submission_timestamp** | **datetime** | Timestamp when the corresponding credit application was submitted. | 
**decision_timestamp** | **datetime** | Timestamp when the credit decision was made. | 
**policy_exception** | **bool** | One of true or false. | 
**policy_exception_reason** | **str** | Conditional if policyException is true. Brief description of reason for policy exception. Max 200 char. | 
**additional_underwriting_data** | **Dict[str, object]** | Object containing key-value pairs of underwriting data per credit policy. | 
**decision_reason** | **str** | Reason for denial per credit policy. Max 200 char. | 
**adverse_action_reasons** | **List[str]** | Array of strings representing Adverse action reasons (must have at least one). Max 200 char per reason. | 
**idempotency_key** | **str** | See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_denied_credit_limit_decision_data_attributes import CreateDeniedCreditLimitDecisionDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeniedCreditLimitDecisionDataAttributes from a JSON string
create_denied_credit_limit_decision_data_attributes_instance = CreateDeniedCreditLimitDecisionDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateDeniedCreditLimitDecisionDataAttributes.to_json())

# convert the object into a dict
create_denied_credit_limit_decision_data_attributes_dict = create_denied_credit_limit_decision_data_attributes_instance.to_dict()
# create an instance of CreateDeniedCreditLimitDecisionDataAttributes from a dict
create_denied_credit_limit_decision_data_attributes_from_dict = CreateDeniedCreditLimitDecisionDataAttributes.from_dict(create_denied_credit_limit_decision_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


