# CreateDeniedCreditLimitDecisionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateDeniedCreditLimitDecisionDataAttributes**](CreateDeniedCreditLimitDecisionDataAttributes.md) |  | 
**relationships** | [**CreateApprovedCreditLimitDecisionDataRelationships**](CreateApprovedCreditLimitDecisionDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_denied_credit_limit_decision_data import CreateDeniedCreditLimitDecisionData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeniedCreditLimitDecisionData from a JSON string
create_denied_credit_limit_decision_data_instance = CreateDeniedCreditLimitDecisionData.from_json(json)
# print the JSON string representation of the object
print(CreateDeniedCreditLimitDecisionData.to_json())

# convert the object into a dict
create_denied_credit_limit_decision_data_dict = create_denied_credit_limit_decision_data_instance.to_dict()
# create an instance of CreateDeniedCreditLimitDecisionData from a dict
create_denied_credit_limit_decision_data_from_dict = CreateDeniedCreditLimitDecisionData.from_dict(create_denied_credit_limit_decision_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


