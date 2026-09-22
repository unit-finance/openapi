# GetMobileWalletPayload200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**MobileWalletPayload**](MobileWalletPayload.md) | A JSON object containing the encrypted payload. | 

## Example

```python
from unit_finance_sdk.models.get_mobile_wallet_payload200_response import GetMobileWalletPayload200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMobileWalletPayload200Response from a JSON string
get_mobile_wallet_payload200_response_instance = GetMobileWalletPayload200Response.from_json(json)
# print the JSON string representation of the object
print(GetMobileWalletPayload200Response.to_json())

# convert the object into a dict
get_mobile_wallet_payload200_response_dict = get_mobile_wallet_payload200_response_instance.to_dict()
# create an instance of GetMobileWalletPayload200Response from a dict
get_mobile_wallet_payload200_response_from_dict = GetMobileWalletPayload200Response.from_dict(get_mobile_wallet_payload200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


