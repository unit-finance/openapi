# NegativeBalanceCoverageTransaction

`negativeBalanceCoverageTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.negative_balance_coverage_transaction import NegativeBalanceCoverageTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of NegativeBalanceCoverageTransaction from a JSON string
negative_balance_coverage_transaction_instance = NegativeBalanceCoverageTransaction.from_json(json)
# print the JSON string representation of the object
print(NegativeBalanceCoverageTransaction.to_json())

# convert the object into a dict
negative_balance_coverage_transaction_dict = negative_balance_coverage_transaction_instance.to_dict()
# create an instance of NegativeBalanceCoverageTransaction from a dict
negative_balance_coverage_transaction_from_dict = NegativeBalanceCoverageTransaction.from_dict(negative_balance_coverage_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


