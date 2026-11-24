# UploadPositivePayDocument200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**WireDrawdownPositivePay**](WireDrawdownPositivePay.md) | The Positive Pay rule after activation. | 

## Example

```python
from unit_finance_sdk.models.upload_positive_pay_document200_response import UploadPositivePayDocument200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UploadPositivePayDocument200Response from a JSON string
upload_positive_pay_document200_response_instance = UploadPositivePayDocument200Response.from_json(json)
# print the JSON string representation of the object
print(UploadPositivePayDocument200Response.to_json())

# convert the object into a dict
upload_positive_pay_document200_response_dict = upload_positive_pay_document200_response_instance.to_dict()
# create an instance of UploadPositivePayDocument200Response from a dict
upload_positive_pay_document200_response_from_dict = UploadPositivePayDocument200Response.from_dict(upload_positive_pay_document200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


