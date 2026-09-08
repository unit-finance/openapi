# FeeTransaction

`FeeTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  | 
**relationships** | [**FeeReversalTransactionRelationships**](FeeReversalTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.fee_transaction import FeeTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of FeeTransaction from a JSON string
fee_transaction_instance = FeeTransaction.from_json(json)
# print the JSON string representation of the object
print(FeeTransaction.to_json())

# convert the object into a dict
fee_transaction_dict = fee_transaction_instance.to_dict()
# create an instance of FeeTransaction from a dict
fee_transaction_from_dict = FeeTransaction.from_dict(fee_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


