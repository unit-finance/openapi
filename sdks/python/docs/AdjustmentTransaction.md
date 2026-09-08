# AdjustmentTransaction

`AdjustmentTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**AdjustmentTransactionAttributes**](AdjustmentTransactionAttributes.md) |  | 
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.adjustment_transaction import AdjustmentTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of AdjustmentTransaction from a JSON string
adjustment_transaction_instance = AdjustmentTransaction.from_json(json)
# print the JSON string representation of the object
print(AdjustmentTransaction.to_json())

# convert the object into a dict
adjustment_transaction_dict = adjustment_transaction_instance.to_dict()
# create an instance of AdjustmentTransaction from a dict
adjustment_transaction_from_dict = AdjustmentTransaction.from_dict(adjustment_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


