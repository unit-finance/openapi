# OnboardingCreditApplicationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**Relationship**](Relationship.md) |  | [optional] 
**lending_program** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.onboarding_credit_application_relationships import OnboardingCreditApplicationRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardingCreditApplicationRelationships from a JSON string
onboarding_credit_application_relationships_instance = OnboardingCreditApplicationRelationships.from_json(json)
# print the JSON string representation of the object
print(OnboardingCreditApplicationRelationships.to_json())

# convert the object into a dict
onboarding_credit_application_relationships_dict = onboarding_credit_application_relationships_instance.to_dict()
# create an instance of OnboardingCreditApplicationRelationships from a dict
onboarding_credit_application_relationships_from_dict = OnboardingCreditApplicationRelationships.from_dict(onboarding_credit_application_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


