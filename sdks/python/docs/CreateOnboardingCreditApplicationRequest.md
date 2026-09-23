# CreateOnboardingCreditApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateOnboardingCreditApplicationData**](CreateOnboardingCreditApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_onboarding_credit_application_request import CreateOnboardingCreditApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOnboardingCreditApplicationRequest from a JSON string
create_onboarding_credit_application_request_instance = CreateOnboardingCreditApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOnboardingCreditApplicationRequest.to_json())

# convert the object into a dict
create_onboarding_credit_application_request_dict = create_onboarding_credit_application_request_instance.to_dict()
# create an instance of CreateOnboardingCreditApplicationRequest from a dict
create_onboarding_credit_application_request_from_dict = CreateOnboardingCreditApplicationRequest.from_dict(create_onboarding_credit_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


