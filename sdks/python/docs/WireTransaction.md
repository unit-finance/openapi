# WireTransaction

`WireTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WireTransactionAttributes**](WireTransactionAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_transaction import WireTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of WireTransaction from a JSON string
wire_transaction_instance = WireTransaction.from_json(json)
# print the JSON string representation of the object
print(WireTransaction.to_json())

# convert the object into a dict
wire_transaction_dict = wire_transaction_instance.to_dict()
# create an instance of WireTransaction from a dict
wire_transaction_from_dict = WireTransaction.from_dict(wire_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


