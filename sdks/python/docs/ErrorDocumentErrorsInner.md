# ErrorDocumentErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**detail** | **str** |  | [optional] 
**details** | **str** | Alias of &#x60;detail&#x60; returned by the Unit API for some errors. | [optional] 
**code** | **str** |  | [optional] 
**source** | [**ErrorDocumentErrorsInnerSource**](ErrorDocumentErrorsInnerSource.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.error_document_errors_inner import ErrorDocumentErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDocumentErrorsInner from a JSON string
error_document_errors_inner_instance = ErrorDocumentErrorsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorDocumentErrorsInner.to_json())

# convert the object into a dict
error_document_errors_inner_dict = error_document_errors_inner_instance.to_dict()
# create an instance of ErrorDocumentErrorsInner from a dict
error_document_errors_inner_from_dict = ErrorDocumentErrorsInner.from_dict(error_document_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


