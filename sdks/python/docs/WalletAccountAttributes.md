# WalletAccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**name** | **str** | The official name. | 
**status** | **str** | Status of the account, either Open, Frozen, or Closed. | 
**wallet_terms** | **str** | The name of the wallet terms. | 
**routing_number** | **str** | Routing number of wallet. | 
**account_number** | **str** | Account number, together with the routingNumber forms the identifier of the wallet on the ACH network. | 
**currency** | **str** | Currency of the wallet. | 
**balance** | **int** | The balance amount (in cents). The balance represents the funds that are currently in the wallet (not taking into account future commitments). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. | 
**hold** | **int** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. | 
**available** | **int** | The available balance for spending (in cents). Equals the balance minus the hold amount. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**freeze_reason** | **str** | Optional. The reason the wallet was frozen, either Fraud, ByBank, or free-text description. | [optional] 
**close_reason** | **str** | Optional. The reason the wallet was closed, either ByCustomer or Fraud. | [optional] 
**fraud_reason** | **str** | Optional. The expanded fraud reason for closing the wallet when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] 

## Example

```python
from unit_finance_sdk.models.wallet_account_attributes import WalletAccountAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of WalletAccountAttributes from a JSON string
wallet_account_attributes_instance = WalletAccountAttributes.from_json(json)
# print the JSON string representation of the object
print(WalletAccountAttributes.to_json())

# convert the object into a dict
wallet_account_attributes_dict = wallet_account_attributes_instance.to_dict()
# create an instance of WalletAccountAttributes from a dict
wallet_account_attributes_from_dict = WalletAccountAttributes.from_dict(wallet_account_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


