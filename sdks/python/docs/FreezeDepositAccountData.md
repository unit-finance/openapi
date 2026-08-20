# FreezeDepositAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**FreezeDepositAccountDataAttributes**](FreezeDepositAccountDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_deposit_account_data import FreezeDepositAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeDepositAccountData from a JSON string
freeze_deposit_account_data_instance = FreezeDepositAccountData.from_json(json)
# print the JSON string representation of the object
print(FreezeDepositAccountData.to_json())

# convert the object into a dict
freeze_deposit_account_data_dict = freeze_deposit_account_data_instance.to_dict()
# create an instance of FreezeDepositAccountData from a dict
freeze_deposit_account_data_from_dict = FreezeDepositAccountData.from_dict(freeze_deposit_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


