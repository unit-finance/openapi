# CreateWalletDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_terms** | **str** | The name of the wallet terms. | 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_wallet_data_attributes import CreateWalletDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWalletDataAttributes from a JSON string
create_wallet_data_attributes_instance = CreateWalletDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateWalletDataAttributes.to_json())

# convert the object into a dict
create_wallet_data_attributes_dict = create_wallet_data_attributes_instance.to_dict()
# create an instance of CreateWalletDataAttributes from a dict
create_wallet_data_attributes_from_dict = CreateWalletDataAttributes.from_dict(create_wallet_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


