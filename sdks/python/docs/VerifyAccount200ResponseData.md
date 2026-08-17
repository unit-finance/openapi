# VerifyAccount200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exists** | **bool** | true when a matching account is found; false otherwise. | 
**account** | [**VerifyAccount200ResponseDataAccount**](VerifyAccount200ResponseDataAccount.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.verify_account200_response_data import VerifyAccount200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyAccount200ResponseData from a JSON string
verify_account200_response_data_instance = VerifyAccount200ResponseData.from_json(json)
# print the JSON string representation of the object
print(VerifyAccount200ResponseData.to_json())

# convert the object into a dict
verify_account200_response_data_dict = verify_account200_response_data_instance.to_dict()
# create an instance of VerifyAccount200ResponseData from a dict
verify_account200_response_data_from_dict = VerifyAccount200ResponseData.from_dict(verify_account200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


