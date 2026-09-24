# UpdateCreditApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateCreditApplicationData**](UpdateCreditApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_credit_application_request import UpdateCreditApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCreditApplicationRequest from a JSON string
update_credit_application_request_instance = UpdateCreditApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCreditApplicationRequest.to_json())

# convert the object into a dict
update_credit_application_request_dict = update_credit_application_request_instance.to_dict()
# create an instance of UpdateCreditApplicationRequest from a dict
update_credit_application_request_from_dict = UpdateCreditApplicationRequest.from_dict(update_credit_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


