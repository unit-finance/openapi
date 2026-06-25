# UpdateSoleProprietorApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateSoleProprietorApplicationData**](UpdateSoleProprietorApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_sole_proprietor_application_request import UpdateSoleProprietorApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSoleProprietorApplicationRequest from a JSON string
update_sole_proprietor_application_request_instance = UpdateSoleProprietorApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSoleProprietorApplicationRequest.to_json())

# convert the object into a dict
update_sole_proprietor_application_request_dict = update_sole_proprietor_application_request_instance.to_dict()
# create an instance of UpdateSoleProprietorApplicationRequest from a dict
update_sole_proprietor_application_request_from_dict = UpdateSoleProprietorApplicationRequest.from_dict(update_sole_proprietor_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


