# MobileWalletPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | [optional] 
**attributes** | [**MobileWalletPayloadAttributes**](MobileWalletPayloadAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.mobile_wallet_payload import MobileWalletPayload

# TODO update the JSON string below
json = "{}"
# create an instance of MobileWalletPayload from a JSON string
mobile_wallet_payload_instance = MobileWalletPayload.from_json(json)
# print the JSON string representation of the object
print(MobileWalletPayload.to_json())

# convert the object into a dict
mobile_wallet_payload_dict = mobile_wallet_payload_instance.to_dict()
# create an instance of MobileWalletPayload from a dict
mobile_wallet_payload_from_dict = MobileWalletPayload.from_dict(mobile_wallet_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


