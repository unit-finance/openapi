# UpdateIndividualApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateIndividualApplicationData**](UpdateIndividualApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_individual_application_request import UpdateIndividualApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIndividualApplicationRequest from a JSON string
update_individual_application_request_instance = UpdateIndividualApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateIndividualApplicationRequest.to_json())

# convert the object into a dict
update_individual_application_request_dict = update_individual_application_request_instance.to_dict()
# create an instance of UpdateIndividualApplicationRequest from a dict
update_individual_application_request_from_dict = UpdateIndividualApplicationRequest.from_dict(update_individual_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


