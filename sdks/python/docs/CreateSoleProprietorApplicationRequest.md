# CreateSoleProprietorApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateSoleProprietorApplicationData**](CreateSoleProprietorApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_sole_proprietor_application_request import CreateSoleProprietorApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSoleProprietorApplicationRequest from a JSON string
create_sole_proprietor_application_request_instance = CreateSoleProprietorApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSoleProprietorApplicationRequest.to_json())

# convert the object into a dict
create_sole_proprietor_application_request_dict = create_sole_proprietor_application_request_instance.to_dict()
# create an instance of CreateSoleProprietorApplicationRequest from a dict
create_sole_proprietor_application_request_from_dict = CreateSoleProprietorApplicationRequest.from_dict(create_sole_proprietor_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


