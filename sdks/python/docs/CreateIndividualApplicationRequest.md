# CreateIndividualApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateIndividualApplicationData**](CreateIndividualApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_individual_application_request import CreateIndividualApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIndividualApplicationRequest from a JSON string
create_individual_application_request_instance = CreateIndividualApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateIndividualApplicationRequest.to_json())

# convert the object into a dict
create_individual_application_request_dict = create_individual_application_request_instance.to_dict()
# create an instance of CreateIndividualApplicationRequest from a dict
create_individual_application_request_from_dict = CreateIndividualApplicationRequest.from_dict(create_individual_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


