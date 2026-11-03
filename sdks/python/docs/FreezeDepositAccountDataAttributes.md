# FreezeDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | One of Fraud, ByBank, or Other. | 
**sub_reason** | **str** | Optional for Fraud and required for ByBank. For Fraud: AchActivity, CardActivity, AccountActivity, CheckActivity, WireActivity, HoldHarmlessReceived, LinkedToFraudulentCustomer. For ByBank: ProhibitedBusiness, MissingCddEdd, NonUsOperations, SuspectedFraud, Inactive, Unfunded, OngoingReevaluation, LegalRequestReceived, ErroneousPayment, Other. | [optional] 
**reason_text** | **str** | Required when reason&#x3D;Other (1..255). Optional for Fraud and ByBank (max 255). | [optional] 

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


