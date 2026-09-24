# CreateOnboardingCreditApplicationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateOnboardingCreditApplicationDataAttributes**](CreateOnboardingCreditApplicationDataAttributes.md) |  | 
**relationships** | [**CreateOnboardingCreditApplicationDataRelationships**](CreateOnboardingCreditApplicationDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_onboarding_credit_application_data import CreateOnboardingCreditApplicationData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOnboardingCreditApplicationData from a JSON string
create_onboarding_credit_application_data_instance = CreateOnboardingCreditApplicationData.from_json(json)
# print the JSON string representation of the object
print(CreateOnboardingCreditApplicationData.to_json())

# convert the object into a dict
create_onboarding_credit_application_data_dict = create_onboarding_credit_application_data_instance.to_dict()
# create an instance of CreateOnboardingCreditApplicationData from a dict
create_onboarding_credit_application_data_from_dict = CreateOnboardingCreditApplicationData.from_dict(create_onboarding_credit_application_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


