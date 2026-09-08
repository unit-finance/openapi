# ReleaseTransaction

`ReleaseTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ReleaseTransactionAttributes**](ReleaseTransactionAttributes.md) |  | 
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.release_transaction import ReleaseTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseTransaction from a JSON string
release_transaction_instance = ReleaseTransaction.from_json(json)
# print the JSON string representation of the object
print(ReleaseTransaction.to_json())

# convert the object into a dict
release_transaction_dict = release_transaction_instance.to_dict()
# create an instance of ReleaseTransaction from a dict
release_transaction_from_dict = ReleaseTransaction.from_dict(release_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


