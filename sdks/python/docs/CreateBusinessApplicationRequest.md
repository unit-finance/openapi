# CreateBusinessApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateBusinessApplicationData**](CreateBusinessApplicationData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_application_request import CreateBusinessApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessApplicationRequest from a JSON string
create_business_application_request_instance = CreateBusinessApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessApplicationRequest.to_json())

# convert the object into a dict
create_business_application_request_dict = create_business_application_request_instance.to_dict()
# create an instance of CreateBusinessApplicationRequest from a dict
create_business_application_request_from_dict = CreateBusinessApplicationRequest.from_dict(create_business_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


