# CreateCreditApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateOnboardingCreditApplicationData**](CreateOnboardingCreditApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_credit_application_request import CreateCreditApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCreditApplicationRequest from a JSON string
create_credit_application_request_instance = CreateCreditApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCreditApplicationRequest.to_json())

# convert the object into a dict
create_credit_application_request_dict = create_credit_application_request_instance.to_dict()
# create an instance of CreateCreditApplicationRequest from a dict
create_credit_application_request_from_dict = CreateCreditApplicationRequest.from_dict(create_credit_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


