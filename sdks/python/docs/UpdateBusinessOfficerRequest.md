# UpdateBusinessOfficerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateBusinessOfficerData**](UpdateBusinessOfficerData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_business_officer_request import UpdateBusinessOfficerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBusinessOfficerRequest from a JSON string
update_business_officer_request_instance = UpdateBusinessOfficerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBusinessOfficerRequest.to_json())

# convert the object into a dict
update_business_officer_request_dict = update_business_officer_request_instance.to_dict()
# create an instance of UpdateBusinessOfficerRequest from a dict
update_business_officer_request_from_dict = UpdateBusinessOfficerRequest.from_dict(update_business_officer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


