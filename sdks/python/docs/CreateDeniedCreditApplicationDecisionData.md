# CreateDeniedCreditApplicationDecisionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateDeniedCreditApplicationDecisionDataAttributes**](CreateDeniedCreditApplicationDecisionDataAttributes.md) |  | 
**relationships** | [**CreateApprovedCreditLimitDecisionDataRelationships**](CreateApprovedCreditLimitDecisionDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_denied_credit_application_decision_data import CreateDeniedCreditApplicationDecisionData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeniedCreditApplicationDecisionData from a JSON string
create_denied_credit_application_decision_data_instance = CreateDeniedCreditApplicationDecisionData.from_json(json)
# print the JSON string representation of the object
print(CreateDeniedCreditApplicationDecisionData.to_json())

# convert the object into a dict
create_denied_credit_application_decision_data_dict = create_denied_credit_application_decision_data_instance.to_dict()
# create an instance of CreateDeniedCreditApplicationDecisionData from a dict
create_denied_credit_application_decision_data_from_dict = CreateDeniedCreditApplicationDecisionData.from_dict(create_denied_credit_application_decision_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


