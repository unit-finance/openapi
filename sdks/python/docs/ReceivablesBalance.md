# ReceivablesBalance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | [optional] 
**attributes** | [**ReceivablesBalanceAttributes**](ReceivablesBalanceAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.receivables_balance import ReceivablesBalance

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivablesBalance from a JSON string
receivables_balance_instance = ReceivablesBalance.from_json(json)
# print the JSON string representation of the object
print(ReceivablesBalance.to_json())

# convert the object into a dict
receivables_balance_dict = receivables_balance_instance.to_dict()
# create an instance of ReceivablesBalance from a dict
receivables_balance_from_dict = ReceivablesBalance.from_dict(receivables_balance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


