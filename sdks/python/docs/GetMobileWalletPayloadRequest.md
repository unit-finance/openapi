# GetMobileWalletPayloadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GetMobileWalletPayloadData**](GetMobileWalletPayloadData.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_mobile_wallet_payload_request import GetMobileWalletPayloadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetMobileWalletPayloadRequest from a JSON string
get_mobile_wallet_payload_request_instance = GetMobileWalletPayloadRequest.from_json(json)
# print the JSON string representation of the object
print(GetMobileWalletPayloadRequest.to_json())

# convert the object into a dict
get_mobile_wallet_payload_request_dict = get_mobile_wallet_payload_request_instance.to_dict()
# create an instance of GetMobileWalletPayloadRequest from a dict
get_mobile_wallet_payload_request_from_dict = GetMobileWalletPayloadRequest.from_dict(get_mobile_wallet_payload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


