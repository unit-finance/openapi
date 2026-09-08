# BookTransaction

`BookTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BookTransactionAttributes**](BookTransactionAttributes.md) |  | 
**relationships** | [**BookTransactionRelationships**](BookTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.book_transaction import BookTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of BookTransaction from a JSON string
book_transaction_instance = BookTransaction.from_json(json)
# print the JSON string representation of the object
print(BookTransaction.to_json())

# convert the object into a dict
book_transaction_dict = book_transaction_instance.to_dict()
# create an instance of BookTransaction from a dict
book_transaction_from_dict = BookTransaction.from_dict(book_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


