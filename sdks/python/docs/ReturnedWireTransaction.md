# ReturnedWireTransaction

`ReturnedWireTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ReturnedWireTransactionAttributes**](ReturnedWireTransactionAttributes.md) |  | 
**relationships** | [**ReturnedACHTransactionRelationships**](ReturnedACHTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.returned_wire_transaction import ReturnedWireTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedWireTransaction from a JSON string
returned_wire_transaction_instance = ReturnedWireTransaction.from_json(json)
# print the JSON string representation of the object
print(ReturnedWireTransaction.to_json())

# convert the object into a dict
returned_wire_transaction_dict = returned_wire_transaction_instance.to_dict()
# create an instance of ReturnedWireTransaction from a dict
returned_wire_transaction_from_dict = ReturnedWireTransaction.from_dict(returned_wire_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


