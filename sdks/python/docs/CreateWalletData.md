# CreateWalletData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateWalletDataAttributes**](CreateWalletDataAttributes.md) |  | 
**relationships** | [**CreateDepositAccountDataRelationships**](CreateDepositAccountDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_wallet_data import CreateWalletData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWalletData from a JSON string
create_wallet_data_instance = CreateWalletData.from_json(json)
# print the JSON string representation of the object
print(CreateWalletData.to_json())

# convert the object into a dict
create_wallet_data_dict = create_wallet_data_instance.to_dict()
# create an instance of CreateWalletData from a dict
create_wallet_data_from_dict = CreateWalletData.from_dict(create_wallet_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


