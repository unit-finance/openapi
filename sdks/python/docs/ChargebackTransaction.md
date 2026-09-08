# ChargebackTransaction

`chargebackTransaction` is a type of transaction that is generated when a Chargeback request is initiated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ChargebackTransactionAttributes**](ChargebackTransactionAttributes.md) |  | 
**relationships** | [**ChargebackTransactionRelationships**](ChargebackTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.chargeback_transaction import ChargebackTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ChargebackTransaction from a JSON string
chargeback_transaction_instance = ChargebackTransaction.from_json(json)
# print the JSON string representation of the object
print(ChargebackTransaction.to_json())

# convert the object into a dict
chargeback_transaction_dict = chargeback_transaction_instance.to_dict()
# create an instance of ChargebackTransaction from a dict
chargeback_transaction_from_dict = ChargebackTransaction.from_dict(chargeback_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


