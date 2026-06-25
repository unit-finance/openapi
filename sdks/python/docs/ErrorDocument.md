# ErrorDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ErrorDocumentErrorsInner]**](ErrorDocumentErrorsInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.error_document import ErrorDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDocument from a JSON string
error_document_instance = ErrorDocument.from_json(json)
# print the JSON string representation of the object
print(ErrorDocument.to_json())

# convert the object into a dict
error_document_dict = error_document_instance.to_dict()
# create an instance of ErrorDocument from a dict
error_document_from_dict = ErrorDocument.from_dict(error_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


