# UpdateBusinessApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateBusinessApplicationData**](UpdateBusinessApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_application_request import UpdateBusinessApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessApplicationRequest from a JSON string
update_business_application_request_instance = UpdateBusinessApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessApplicationRequest.to_json())

# convert the object into a dict
update_business_application_request_dict = update_business_application_request_instance.to_dict()
# create an instance of UpdateBusinessApplicationRequest from a dict
update_business_application_request_from_dict = UpdateBusinessApplicationRequest.from_dict(update_business_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


