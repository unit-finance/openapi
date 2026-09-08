# RepaidPaymentAdvanceTransaction

`RepaidPaymentAdvanceTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RepaidPaymentAdvanceTransactionAttributes**](RepaidPaymentAdvanceTransactionAttributes.md) |  | 
**relationships** | [**RepaidPaymentAdvanceTransactionRelationships**](RepaidPaymentAdvanceTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.repaid_payment_advance_transaction import RepaidPaymentAdvanceTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of RepaidPaymentAdvanceTransaction from a JSON string
repaid_payment_advance_transaction_instance = RepaidPaymentAdvanceTransaction.from_json(json)
# print the JSON string representation of the object
print(RepaidPaymentAdvanceTransaction.to_json())

# convert the object into a dict
repaid_payment_advance_transaction_dict = repaid_payment_advance_transaction_instance.to_dict()
# create an instance of RepaidPaymentAdvanceTransaction from a dict
repaid_payment_advance_transaction_from_dict = RepaidPaymentAdvanceTransaction.from_dict(repaid_payment_advance_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


