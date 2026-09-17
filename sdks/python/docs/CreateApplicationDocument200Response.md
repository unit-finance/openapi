# CreateApplicationDocument200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ApplicationDocument**](ApplicationDocument.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_application_document200_response import CreateApplicationDocument200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateApplicationDocument200Response from a JSON string
create_application_document200_response_instance = CreateApplicationDocument200Response.from_json(json)
# print the JSON string representation of the object
print(CreateApplicationDocument200Response.to_json())

# convert the object into a dict
create_application_document200_response_dict = create_application_document200_response_instance.to_dict()
# create an instance of CreateApplicationDocument200Response from a dict
create_application_document200_response_from_dict = CreateApplicationDocument200Response.from_dict(create_application_document200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


