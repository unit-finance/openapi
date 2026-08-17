# CreditAccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | Optional. The date the resource was updated. | [optional] 
**name** | **str** | Name of the account holder. | 
**credit_terms** | **str** | The selected credit terms. | 
**currency** | **str** | Currency of the account. | 
**credit_limit** | **int** | The credit limit (cents). | 
**balance** | **int** | The balance amount (cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of settled transactions minus any repayments. | 
**hold** | **int** | The hold amount (cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. | 
**available** | **int** | The available balance for spending (cents). Equals the credit limit, minus the balance and hold amounts. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**status** | **str** | Status of the account, either Open, Frozen, or Closed. | 
**freeze_reason** | **str** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. | [optional] 
**close_reason** | **str** | Optional. The reason the account was closed, either ByCustomer, Overdue or Fraud. | [optional] 
**close_reason_text** | **str** | Optional. An expanded free-text reason for account closure. | [optional] 
**fraud_reason** | **str** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] 

## Example

```python
from unit_finance_sdk.models.credit_account_attributes import CreditAccountAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreditAccountAttributes from a JSON string
credit_account_attributes_instance = CreditAccountAttributes.from_json(json)
# print the JSON string representation of the object
print(CreditAccountAttributes.to_json())

# convert the object into a dict
credit_account_attributes_dict = credit_account_attributes_instance.to_dict()
# create an instance of CreditAccountAttributes from a dict
credit_account_attributes_from_dict = CreditAccountAttributes.from_dict(credit_account_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


