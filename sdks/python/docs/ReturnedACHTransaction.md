# ReturnedACHTransaction

`ReturnedAchTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ReturnedACHTransactionAttributes**](ReturnedACHTransactionAttributes.md) |  | 
**relationships** | [**ReturnedACHTransactionRelationships**](ReturnedACHTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.returned_ach_transaction import ReturnedACHTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedACHTransaction from a JSON string
returned_ach_transaction_instance = ReturnedACHTransaction.from_json(json)
# print the JSON string representation of the object
print(ReturnedACHTransaction.to_json())

# convert the object into a dict
returned_ach_transaction_dict = returned_ach_transaction_instance.to_dict()
# create an instance of ReturnedACHTransaction from a dict
returned_ach_transaction_from_dict = ReturnedACHTransaction.from_dict(returned_ach_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


