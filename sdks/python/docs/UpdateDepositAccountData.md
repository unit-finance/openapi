# UpdateDepositAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateDepositAccountDataAttributes**](UpdateDepositAccountDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_deposit_account_data import UpdateDepositAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDepositAccountData from a JSON string
update_deposit_account_data_instance = UpdateDepositAccountData.from_json(json)
# print the JSON string representation of the object
print(UpdateDepositAccountData.to_json())

# convert the object into a dict
update_deposit_account_data_dict = update_deposit_account_data_instance.to_dict()
# create an instance of UpdateDepositAccountData from a dict
update_deposit_account_data_from_dict = UpdateDepositAccountData.from_dict(update_deposit_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


