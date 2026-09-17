# VerifyDocumentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**VerifyDocumentData**](VerifyDocumentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.verify_document_request import VerifyDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyDocumentRequest from a JSON string
verify_document_request_instance = VerifyDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyDocumentRequest.to_json())

# convert the object into a dict
verify_document_request_dict = verify_document_request_instance.to_dict()
# create an instance of VerifyDocumentRequest from a dict
verify_document_request_from_dict = VerifyDocumentRequest.from_dict(verify_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


