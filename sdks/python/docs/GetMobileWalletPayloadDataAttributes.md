# GetMobileWalletPayloadDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signed_nonce** | **str** | The signedNonce received from the Visa SDK | 

## Example

```python
from unit_finance_sdk.models.get_mobile_wallet_payload_data_attributes import GetMobileWalletPayloadDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GetMobileWalletPayloadDataAttributes from a JSON string
get_mobile_wallet_payload_data_attributes_instance = GetMobileWalletPayloadDataAttributes.from_json(json)
# print the JSON string representation of the object
print(GetMobileWalletPayloadDataAttributes.to_json())

# convert the object into a dict
get_mobile_wallet_payload_data_attributes_dict = get_mobile_wallet_payload_data_attributes_instance.to_dict()
# create an instance of GetMobileWalletPayloadDataAttributes from a dict
get_mobile_wallet_payload_data_attributes_from_dict = GetMobileWalletPayloadDataAttributes.from_dict(get_mobile_wallet_payload_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


