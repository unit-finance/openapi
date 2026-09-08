# RepaidPaymentAdvanceTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. The value is always Credit. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.repaid_payment_advance_transaction_attributes import RepaidPaymentAdvanceTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RepaidPaymentAdvanceTransactionAttributes from a JSON string
repaid_payment_advance_transaction_attributes_instance = RepaidPaymentAdvanceTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(RepaidPaymentAdvanceTransactionAttributes.to_json())

# convert the object into a dict
repaid_payment_advance_transaction_attributes_dict = repaid_payment_advance_transaction_attributes_instance.to_dict()
# create an instance of RepaidPaymentAdvanceTransactionAttributes from a dict
repaid_payment_advance_transaction_attributes_from_dict = RepaidPaymentAdvanceTransactionAttributes.from_dict(repaid_payment_advance_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


