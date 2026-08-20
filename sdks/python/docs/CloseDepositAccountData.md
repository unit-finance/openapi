# CloseDepositAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CloseDepositAccountDataAttributes**](CloseDepositAccountDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.close_deposit_account_data import CloseDepositAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of CloseDepositAccountData from a JSON string
close_deposit_account_data_instance = CloseDepositAccountData.from_json(json)
# print the JSON string representation of the object
print(CloseDepositAccountData.to_json())

# convert the object into a dict
close_deposit_account_data_dict = close_deposit_account_data_instance.to_dict()
# create an instance of CloseDepositAccountData from a dict
close_deposit_account_data_from_dict = CloseDepositAccountData.from_dict(close_deposit_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


