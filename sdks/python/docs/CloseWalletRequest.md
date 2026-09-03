# CloseWalletRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CloseWalletData**](CloseWalletData.md) |  | 

## Example

```python
from unit_finance_sdk.models.close_wallet_request import CloseWalletRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloseWalletRequest from a JSON string
close_wallet_request_instance = CloseWalletRequest.from_json(json)
# print the JSON string representation of the object
print(CloseWalletRequest.to_json())

# convert the object into a dict
close_wallet_request_dict = close_wallet_request_instance.to_dict()
# create an instance of CloseWalletRequest from a dict
close_wallet_request_from_dict = CloseWalletRequest.from_dict(close_wallet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


