# ReturnExternalRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ReturnExternalRepaymentData**](ReturnExternalRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.return_external_repayment_request import ReturnExternalRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnExternalRepaymentRequest from a JSON string
return_external_repayment_request_instance = ReturnExternalRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(ReturnExternalRepaymentRequest.to_json())

# convert the object into a dict
return_external_repayment_request_dict = return_external_repayment_request_instance.to_dict()
# create an instance of ReturnExternalRepaymentRequest from a dict
return_external_repayment_request_from_dict = ReturnExternalRepaymentRequest.from_dict(return_external_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


