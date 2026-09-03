# FreezeWalletData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**FreezeWalletDataAttributes**](FreezeWalletDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_wallet_data import FreezeWalletData

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeWalletData from a JSON string
freeze_wallet_data_instance = FreezeWalletData.from_json(json)
# print the JSON string representation of the object
print(FreezeWalletData.to_json())

# convert the object into a dict
freeze_wallet_data_dict = freeze_wallet_data_instance.to_dict()
# create an instance of FreezeWalletData from a dict
freeze_wallet_data_from_dict = FreezeWalletData.from_dict(freeze_wallet_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


