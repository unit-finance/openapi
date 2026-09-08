# DisputeTransaction

`DisputeTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**DisputeTransactionAttributes**](DisputeTransactionAttributes.md) |  | 
**relationships** | [**DisputeTransactionRelationships**](DisputeTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.dispute_transaction import DisputeTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeTransaction from a JSON string
dispute_transaction_instance = DisputeTransaction.from_json(json)
# print the JSON string representation of the object
print(DisputeTransaction.to_json())

# convert the object into a dict
dispute_transaction_dict = dispute_transaction_instance.to_dict()
# create an instance of DisputeTransaction from a dict
dispute_transaction_from_dict = DisputeTransaction.from_dict(dispute_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


