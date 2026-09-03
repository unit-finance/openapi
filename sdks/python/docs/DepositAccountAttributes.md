# DepositAccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | Optional. The date the resource was updated. | [optional] 
**name** | **str** | Name of the account holder. | 
**deposit_product** | **str** | The name of the deposit product. | 
**routing_number** | **str** | Routing number of account. | 
**account_number** | **str** | Account number, together with the routingNumber forms the identifier of the account on the ACH network. | 
**currency** | **str** | Currency of the account. | 
**balance** | **int** | The balance amount (in cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. | 
**hold** | **int** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. | 
**available** | **int** | The available balance for spending (in cents). Equals the balance minus the hold amount. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**status** | **str** | Status of the account, either Open, Frozen, or Closed. | 
**interest_terms** | [**TotalAccruedInterestType**](TotalAccruedInterestType.md) | The interest terms of the deposit account. Only available if extraFields[account] is used when calling the Get Account by Id endpoint. | [optional] 
**freeze_reason** | **str** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. | [optional] 
**close_reason** | **str** | Optional. The reason the account was closed, either ByCustomer, Fraud or ByBank. | [optional] 
**fraud_reason** | **str** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] 
**daca_status** | **str** | Optional. The account DACA (Deposit Account Control Agreements) status. Can be one of: Entered, Activated. | [optional] 

## Example

```python
from unit_finance_sdk.models.deposit_account_attributes import DepositAccountAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DepositAccountAttributes from a JSON string
deposit_account_attributes_instance = DepositAccountAttributes.from_json(json)
# print the JSON string representation of the object
print(DepositAccountAttributes.to_json())

# convert the object into a dict
deposit_account_attributes_dict = deposit_account_attributes_instance.to_dict()
# create an instance of DepositAccountAttributes from a dict
deposit_account_attributes_from_dict = DepositAccountAttributes.from_dict(deposit_account_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


