# OriginatedACHTransaction

`OriginatedAchTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**OriginatedACHTransactionAttributes**](OriginatedACHTransactionAttributes.md) |  | 
**relationships** | [**OriginatedACHTransactionRelationships**](OriginatedACHTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.originated_ach_transaction import OriginatedACHTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of OriginatedACHTransaction from a JSON string
originated_ach_transaction_instance = OriginatedACHTransaction.from_json(json)
# print the JSON string representation of the object
print(OriginatedACHTransaction.to_json())

# convert the object into a dict
originated_ach_transaction_dict = originated_ach_transaction_instance.to_dict()
# create an instance of OriginatedACHTransaction from a dict
originated_ach_transaction_from_dict = OriginatedACHTransaction.from_dict(originated_ach_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


