# ErrorDocumentErrorsInnerSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pointer** | **str** | JSON Pointer to the request field that caused the error (e.g. \&quot;/data/attributes/name\&quot;). | [optional] 

## Example

```python
from unit_finance_sdk.models.error_document_errors_inner_source import ErrorDocumentErrorsInnerSource

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDocumentErrorsInnerSource from a JSON string
error_document_errors_inner_source_instance = ErrorDocumentErrorsInnerSource.from_json(json)
# print the JSON string representation of the object
print(ErrorDocumentErrorsInnerSource.to_json())

# convert the object into a dict
error_document_errors_inner_source_dict = error_document_errors_inner_source_instance.to_dict()
# create an instance of ErrorDocumentErrorsInnerSource from a dict
error_document_errors_inner_source_from_dict = ErrorDocumentErrorsInnerSource.from_dict(error_document_errors_inner_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


