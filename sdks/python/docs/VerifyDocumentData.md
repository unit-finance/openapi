# VerifyDocumentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**VerifyDocumentDataAttributes**](VerifyDocumentDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.verify_document_data import VerifyDocumentData

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyDocumentData from a JSON string
verify_document_data_instance = VerifyDocumentData.from_json(json)
# print the JSON string representation of the object
print(VerifyDocumentData.to_json())

# convert the object into a dict
verify_document_data_dict = verify_document_data_instance.to_dict()
# create an instance of VerifyDocumentData from a dict
verify_document_data_from_dict = VerifyDocumentData.from_dict(verify_document_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


