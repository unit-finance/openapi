# CreateOnboardingCreditApplicationDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**Relationship**](Relationship.md) |  | 
**lending_program** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_onboarding_credit_application_data_relationships import CreateOnboardingCreditApplicationDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOnboardingCreditApplicationDataRelationships from a JSON string
create_onboarding_credit_application_data_relationships_instance = CreateOnboardingCreditApplicationDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateOnboardingCreditApplicationDataRelationships.to_json())

# convert the object into a dict
create_onboarding_credit_application_data_relationships_dict = create_onboarding_credit_application_data_relationships_instance.to_dict()
# create an instance of CreateOnboardingCreditApplicationDataRelationships from a dict
create_onboarding_credit_application_data_relationships_from_dict = CreateOnboardingCreditApplicationDataRelationships.from_dict(create_onboarding_credit_application_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


