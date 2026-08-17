# CloseWalletData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CloseWalletDataAttributes**](CloseWalletDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.close_wallet_data import CloseWalletData

# TODO update the JSON string below
json = "{}"
# create an instance of CloseWalletData from a JSON string
close_wallet_data_instance = CloseWalletData.from_json(json)
# print the JSON string representation of the object
print(CloseWalletData.to_json())

# convert the object into a dict
close_wallet_data_dict = close_wallet_data_instance.to_dict()
# create an instance of CloseWalletData from a dict
close_wallet_data_from_dict = CloseWalletData.from_dict(close_wallet_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


