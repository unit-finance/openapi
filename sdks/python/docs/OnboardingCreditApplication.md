# OnboardingCreditApplication

`OnboardingCreditApplication` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ExistingCustomerCreditApplicationAttributes**](ExistingCustomerCreditApplicationAttributes.md) |  | 
**relationships** | [**OnboardingCreditApplicationRelationships**](OnboardingCreditApplicationRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.onboarding_credit_application import OnboardingCreditApplication

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardingCreditApplication from a JSON string
onboarding_credit_application_instance = OnboardingCreditApplication.from_json(json)
# print the JSON string representation of the object
print(OnboardingCreditApplication.to_json())

# convert the object into a dict
onboarding_credit_application_dict = onboarding_credit_application_instance.to_dict()
# create an instance of OnboardingCreditApplication from a dict
onboarding_credit_application_from_dict = OnboardingCreditApplication.from_dict(onboarding_credit_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


