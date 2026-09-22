# MobileWalletPayloadAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **str** | Encrypted payload. | [optional] 

## Example

```python
from unit_finance_sdk.models.mobile_wallet_payload_attributes import MobileWalletPayloadAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of MobileWalletPayloadAttributes from a JSON string
mobile_wallet_payload_attributes_instance = MobileWalletPayloadAttributes.from_json(json)
# print the JSON string representation of the object
print(MobileWalletPayloadAttributes.to_json())

# convert the object into a dict
mobile_wallet_payload_attributes_dict = mobile_wallet_payload_attributes_instance.to_dict()
# create an instance of MobileWalletPayloadAttributes from a dict
mobile_wallet_payload_attributes_from_dict = MobileWalletPayloadAttributes.from_dict(mobile_wallet_payload_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


