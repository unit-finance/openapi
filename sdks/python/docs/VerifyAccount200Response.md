# VerifyAccount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**VerifyAccount200ResponseData**](VerifyAccount200ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.verify_account200_response import VerifyAccount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyAccount200Response from a JSON string
verify_account200_response_instance = VerifyAccount200Response.from_json(json)
# print the JSON string representation of the object
print(VerifyAccount200Response.to_json())

# convert the object into a dict
verify_account200_response_dict = verify_account200_response_instance.to_dict()
# create an instance of VerifyAccount200Response from a dict
verify_account200_response_from_dict = VerifyAccount200Response.from_dict(verify_account200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


