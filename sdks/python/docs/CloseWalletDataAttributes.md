# CloseWalletDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for closing the wallet. Either ByCustomer, Fraud, ByBank, or NegativeBalance. | 
**fraud_reason** | **str** | Optional. The expanded fraud reason for closing the wallet when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] 
**bank_reason** | **str** | Optional. The expanded bank reason for closing the wallet when ByBank is specified as the reason. Can be one of: (ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud). This list is subject to change. | [optional] 

## Example

```python
from unit_finance_sdk.models.close_wallet_data_attributes import CloseWalletDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CloseWalletDataAttributes from a JSON string
close_wallet_data_attributes_instance = CloseWalletDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CloseWalletDataAttributes.to_json())

# convert the object into a dict
close_wallet_data_attributes_dict = close_wallet_data_attributes_instance.to_dict()
# create an instance of CloseWalletDataAttributes from a dict
close_wallet_data_attributes_from_dict = CloseWalletDataAttributes.from_dict(close_wallet_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


