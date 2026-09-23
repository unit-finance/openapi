# CreateExistingCreditApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateExistingCreditApplicationData**](CreateExistingCreditApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_existing_credit_application_request import CreateExistingCreditApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExistingCreditApplicationRequest from a JSON string
create_existing_credit_application_request_instance = CreateExistingCreditApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateExistingCreditApplicationRequest.to_json())

# convert the object into a dict
create_existing_credit_application_request_dict = create_existing_credit_application_request_instance.to_dict()
# create an instance of CreateExistingCreditApplicationRequest from a dict
create_existing_credit_application_request_from_dict = CreateExistingCreditApplicationRequest.from_dict(create_existing_credit_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


