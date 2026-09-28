# ReceivablesBalanceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending_purchase_receivables_amount** | **int** | The remaining amount to be purchased. | 
**purchase_due_date** | **date** | The date the receivables are supposed to be purchased e.g. 2024-12-31. | [optional] 

## Example

```python
from unit_finance_sdk.models.receivables_balance_attributes import ReceivablesBalanceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivablesBalanceAttributes from a JSON string
receivables_balance_attributes_instance = ReceivablesBalanceAttributes.from_json(json)
# print the JSON string representation of the object
print(ReceivablesBalanceAttributes.to_json())

# convert the object into a dict
receivables_balance_attributes_dict = receivables_balance_attributes_instance.to_dict()
# create an instance of ReceivablesBalanceAttributes from a dict
receivables_balance_attributes_from_dict = ReceivablesBalanceAttributes.from_dict(receivables_balance_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


