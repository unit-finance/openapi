# VerifyAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**VerifyAccountData**](VerifyAccountData.md) |  | 

## Example

```python
from unit_finance_sdk.models.verify_account_request import VerifyAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyAccountRequest from a JSON string
verify_account_request_instance = VerifyAccountRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyAccountRequest.to_json())

# convert the object into a dict
verify_account_request_dict = verify_account_request_instance.to_dict()
# create an instance of VerifyAccountRequest from a dict
verify_account_request_from_dict = VerifyAccountRequest.from_dict(verify_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


