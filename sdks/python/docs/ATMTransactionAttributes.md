# ATMTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction, including the surcharge fee. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**card_last4_digits** | **str** | The last 4 digits of the debit card involved in the transaction. | 
**atm_name** | **str** | The name of the ATM. | 
**atm_location** | **str** | The location (city, state, etc.) of the ATM. | [optional] 
**surcharge** | **float** | The surcharge fee (cents) for the transaction. | 
**interchange** | **str** | The interchange share for this transaction. Calculated at the end of each day, see the transaction.updated event. | [optional] 
**gross_interchange** | **str** | The gross interchange share for this transaction. | [optional] 
**card_network** | **str** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | 
**currency_conversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. | [optional] 
**card_decision_source** | **str** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. | [optional] 

## Example

```python
from unit_finance_sdk.models.atm_transaction_attributes import ATMTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ATMTransactionAttributes from a JSON string
atm_transaction_attributes_instance = ATMTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(ATMTransactionAttributes.to_json())

# convert the object into a dict
atm_transaction_attributes_dict = atm_transaction_attributes_instance.to_dict()
# create an instance of ATMTransactionAttributes from a dict
atm_transaction_attributes_from_dict = ATMTransactionAttributes.from_dict(atm_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


