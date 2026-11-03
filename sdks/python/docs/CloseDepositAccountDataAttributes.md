# CloseDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for closing the account. One of ByCustomer, Fraud, ByBank, NegativeBalance, BreachOfTermsAndConditions, NoAccountActivity, ProgramChange, ProgramClosed, or CustomerDeceased. | 
**reason_text** | **str** | Optional. Free-text reason (up to 255 characters). | [optional] 
**fraud_reason** | **str** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] 
**bank_reason** | **str** | Optional. The expanded bank reason for closing the account when ByBank is specified as the reason. Can be one of: (ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud, Unfunded, Inactive). This list is subject to change. | [optional] 

## Example

```python
from unit_finance_sdk.models.close_deposit_account_data_attributes import CloseDepositAccountDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CloseDepositAccountDataAttributes from a JSON string
close_deposit_account_data_attributes_instance = CloseDepositAccountDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CloseDepositAccountDataAttributes.to_json())

# convert the object into a dict
close_deposit_account_data_attributes_dict = close_deposit_account_data_attributes_instance.to_dict()
# create an instance of CloseDepositAccountDataAttributes from a dict
close_deposit_account_data_attributes_from_dict = CloseDepositAccountDataAttributes.from_dict(close_deposit_account_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


