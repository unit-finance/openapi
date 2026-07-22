# FreezeWalletRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**FreezeWalletData**](FreezeWalletData.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_wallet_request import FreezeWalletRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeWalletRequest from a JSON string
freeze_wallet_request_instance = FreezeWalletRequest.from_json(json)
# print the JSON string representation of the object
print(FreezeWalletRequest.to_json())

# convert the object into a dict
freeze_wallet_request_dict = freeze_wallet_request_instance.to_dict()
# create an instance of FreezeWalletRequest from a dict
freeze_wallet_request_from_dict = FreezeWalletRequest.from_dict(freeze_wallet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


