# CheckPaymentTransaction

`CheckPaymentTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | 
**relationships** | [**CheckPaymentTransactionRelationships**](CheckPaymentTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_payment_transaction import CheckPaymentTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPaymentTransaction from a JSON string
check_payment_transaction_instance = CheckPaymentTransaction.from_json(json)
# print the JSON string representation of the object
print(CheckPaymentTransaction.to_json())

# convert the object into a dict
check_payment_transaction_dict = check_payment_transaction_instance.to_dict()
# create an instance of CheckPaymentTransaction from a dict
check_payment_transaction_from_dict = CheckPaymentTransaction.from_dict(check_payment_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


