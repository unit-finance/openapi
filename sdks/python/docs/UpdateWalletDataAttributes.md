# UpdateWalletDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. The name of the wallet. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 
**wallet_terms** | **str** | Optional. The name of the selected wallet terms. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_wallet_data_attributes import UpdateWalletDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWalletDataAttributes from a JSON string
update_wallet_data_attributes_instance = UpdateWalletDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateWalletDataAttributes.to_json())

# convert the object into a dict
update_wallet_data_attributes_dict = update_wallet_data_attributes_instance.to_dict()
# create an instance of UpdateWalletDataAttributes from a dict
update_wallet_data_attributes_from_dict = UpdateWalletDataAttributes.from_dict(update_wallet_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


