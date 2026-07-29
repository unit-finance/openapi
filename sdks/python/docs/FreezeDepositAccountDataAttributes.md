# FreezeDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for freezing the account. Either Fraud or Other, with a specified reasonText. | 
**reason_text** | **str** | Optional. The free-text reason for freezing the account (up to 255 characters) when Other is specified. | [optional] 

## Example

```python
from unit_finance_sdk.models.freeze_deposit_account_data_attributes import FreezeDepositAccountDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeDepositAccountDataAttributes from a JSON string
freeze_deposit_account_data_attributes_instance = FreezeDepositAccountDataAttributes.from_json(json)
# print the JSON string representation of the object
print(FreezeDepositAccountDataAttributes.to_json())

# convert the object into a dict
freeze_deposit_account_data_attributes_dict = freeze_deposit_account_data_attributes_instance.to_dict()
# create an instance of FreezeDepositAccountDataAttributes from a dict
freeze_deposit_account_data_attributes_from_dict = FreezeDepositAccountDataAttributes.from_dict(freeze_deposit_account_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


