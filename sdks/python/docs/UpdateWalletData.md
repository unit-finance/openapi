# UpdateWalletData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateWalletDataAttributes**](UpdateWalletDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_wallet_data import UpdateWalletData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWalletData from a JSON string
update_wallet_data_instance = UpdateWalletData.from_json(json)
# print the JSON string representation of the object
print(UpdateWalletData.to_json())

# convert the object into a dict
update_wallet_data_dict = update_wallet_data_instance.to_dict()
# create an instance of UpdateWalletData from a dict
update_wallet_data_from_dict = UpdateWalletData.from_dict(update_wallet_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


