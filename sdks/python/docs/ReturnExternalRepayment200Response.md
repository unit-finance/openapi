# ReturnExternalRepayment200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ExternalRepayment**](ExternalRepayment.md) |  | 

## Example

```python
from unit_finance_sdk.models.return_external_repayment200_response import ReturnExternalRepayment200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnExternalRepayment200Response from a JSON string
return_external_repayment200_response_instance = ReturnExternalRepayment200Response.from_json(json)
# print the JSON string representation of the object
print(ReturnExternalRepayment200Response.to_json())

# convert the object into a dict
return_external_repayment200_response_dict = return_external_repayment200_response_instance.to_dict()
# create an instance of ReturnExternalRepayment200Response from a dict
return_external_repayment200_response_from_dict = ReturnExternalRepayment200Response.from_dict(return_external_repayment200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


