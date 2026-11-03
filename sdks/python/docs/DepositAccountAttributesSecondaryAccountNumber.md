# DepositAccountAttributesSecondaryAccountNumber

Optional. Secondary account/routing pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_number** | **str** | Secondary routing number (9 digits). | [optional] 
**account_number** | **str** | Secondary account number (10-12 digits). | [optional] 

## Example

```python
from unit_finance_sdk.models.deposit_account_attributes_secondary_account_number import DepositAccountAttributesSecondaryAccountNumber

# TODO update the JSON string below
json = "{}"
# create an instance of DepositAccountAttributesSecondaryAccountNumber from a JSON string
deposit_account_attributes_secondary_account_number_instance = DepositAccountAttributesSecondaryAccountNumber.from_json(json)
# print the JSON string representation of the object
print(DepositAccountAttributesSecondaryAccountNumber.to_json())

# convert the object into a dict
deposit_account_attributes_secondary_account_number_dict = deposit_account_attributes_secondary_account_number_instance.to_dict()
# create an instance of DepositAccountAttributesSecondaryAccountNumber from a dict
deposit_account_attributes_secondary_account_number_from_dict = DepositAccountAttributesSecondaryAccountNumber.from_dict(deposit_account_attributes_secondary_account_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


