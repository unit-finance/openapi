# CheckDepositTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.check_deposit_transaction_attributes import CheckDepositTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDepositTransactionAttributes from a JSON string
check_deposit_transaction_attributes_instance = CheckDepositTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(CheckDepositTransactionAttributes.to_json())

# convert the object into a dict
check_deposit_transaction_attributes_dict = check_deposit_transaction_attributes_instance.to_dict()
# create an instance of CheckDepositTransactionAttributes from a dict
check_deposit_transaction_attributes_from_dict = CheckDepositTransactionAttributes.from_dict(check_deposit_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


