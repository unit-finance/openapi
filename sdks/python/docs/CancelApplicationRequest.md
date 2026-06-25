# CancelApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CancelApplicationData**](CancelApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.cancel_application_request import CancelApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelApplicationRequest from a JSON string
cancel_application_request_instance = CancelApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(CancelApplicationRequest.to_json())

# convert the object into a dict
cancel_application_request_dict = cancel_application_request_instance.to_dict()
# create an instance of CancelApplicationRequest from a dict
cancel_application_request_from_dict = CancelApplicationRequest.from_dict(cancel_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


