# CloseAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CloseWalletData**](CloseWalletData.md) |  | 

## Example

```python
from unit_finance_sdk.models.close_account_request import CloseAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloseAccountRequest from a JSON string
close_account_request_instance = CloseAccountRequest.from_json(json)
# print the JSON string representation of the object
print(CloseAccountRequest.to_json())

# convert the object into a dict
close_account_request_dict = close_account_request_instance.to_dict()
# create an instance of CloseAccountRequest from a dict
close_account_request_from_dict = CloseAccountRequest.from_dict(close_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


