# ApplicationDocument

`ApplicationDocument` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ApplicationDocumentAttributes**](ApplicationDocumentAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.application_document import ApplicationDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDocument from a JSON string
application_document_instance = ApplicationDocument.from_json(json)
# print the JSON string representation of the object
print(ApplicationDocument.to_json())

# convert the object into a dict
application_document_dict = application_document_instance.to_dict()
# create an instance of ApplicationDocument from a dict
application_document_from_dict = ApplicationDocument.from_dict(application_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


