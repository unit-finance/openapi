# ReturnedCheckPaymentTransaction

`ReturnedCheckPaymentTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ReturnedCheckPaymentTransactionAttributes**](ReturnedCheckPaymentTransactionAttributes.md) |  | 
**relationships** | [**CheckPaymentTransactionRelationships**](CheckPaymentTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.returned_check_payment_transaction import ReturnedCheckPaymentTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedCheckPaymentTransaction from a JSON string
returned_check_payment_transaction_instance = ReturnedCheckPaymentTransaction.from_json(json)
# print the JSON string representation of the object
print(ReturnedCheckPaymentTransaction.to_json())

# convert the object into a dict
returned_check_payment_transaction_dict = returned_check_payment_transaction_instance.to_dict()
# create an instance of ReturnedCheckPaymentTransaction from a dict
returned_check_payment_transaction_from_dict = ReturnedCheckPaymentTransaction.from_dict(returned_check_payment_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


