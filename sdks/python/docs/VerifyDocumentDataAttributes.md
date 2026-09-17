# VerifyDocumentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Verification job identifier | 

## Example

```python
from unit_finance_sdk.models.verify_document_data_attributes import VerifyDocumentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyDocumentDataAttributes from a JSON string
verify_document_data_attributes_instance = VerifyDocumentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(VerifyDocumentDataAttributes.to_json())

# convert the object into a dict
verify_document_data_attributes_dict = verify_document_data_attributes_instance.to_dict()
# create an instance of VerifyDocumentDataAttributes from a dict
verify_document_data_attributes_from_dict = VerifyDocumentDataAttributes.from_dict(verify_document_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


