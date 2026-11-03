# FreezeCreditAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**FreezeCreditAccountDataAttributes**](FreezeCreditAccountDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_credit_account_data import FreezeCreditAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeCreditAccountData from a JSON string
freeze_credit_account_data_instance = FreezeCreditAccountData.from_json(json)
# print the JSON string representation of the object
print(FreezeCreditAccountData.to_json())

# convert the object into a dict
freeze_credit_account_data_dict = freeze_credit_account_data_instance.to_dict()
# create an instance of FreezeCreditAccountData from a dict
freeze_credit_account_data_from_dict = FreezeCreditAccountData.from_dict(freeze_credit_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


