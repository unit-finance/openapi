# GetMobileWalletPayloadData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**GetMobileWalletPayloadDataAttributes**](GetMobileWalletPayloadDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_mobile_wallet_payload_data import GetMobileWalletPayloadData

# TODO update the JSON string below
json = "{}"
# create an instance of GetMobileWalletPayloadData from a JSON string
get_mobile_wallet_payload_data_instance = GetMobileWalletPayloadData.from_json(json)
# print the JSON string representation of the object
print(GetMobileWalletPayloadData.to_json())

# convert the object into a dict
get_mobile_wallet_payload_data_dict = get_mobile_wallet_payload_data_instance.to_dict()
# create an instance of GetMobileWalletPayloadData from a dict
get_mobile_wallet_payload_data_from_dict = GetMobileWalletPayloadData.from_dict(get_mobile_wallet_payload_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


