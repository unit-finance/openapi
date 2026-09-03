# CloseCreditAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for closing the account. Either ByCustomer, Fraud or Overdue. If not specified, will default to ByCustomer. | [optional] 
**fraud_reason** | **str** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] 

## Example

```python
from unit_finance_sdk.models.close_credit_account_data_attributes import CloseCreditAccountDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CloseCreditAccountDataAttributes from a JSON string
close_credit_account_data_attributes_instance = CloseCreditAccountDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CloseCreditAccountDataAttributes.to_json())

# convert the object into a dict
close_credit_account_data_attributes_dict = close_credit_account_data_attributes_instance.to_dict()
# create an instance of CloseCreditAccountDataAttributes from a dict
close_credit_account_data_attributes_from_dict = CloseCreditAccountDataAttributes.from_dict(close_credit_account_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


