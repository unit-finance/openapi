# BookTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty_customer** | [**Relationship**](Relationship.md) |  | [optional] 
**payment** | [**Relationship**](Relationship.md) |  | [optional] 
**recurring_payment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.book_transaction_relationships import BookTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BookTransactionRelationships from a JSON string
book_transaction_relationships_instance = BookTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(BookTransactionRelationships.to_json())

# convert the object into a dict
book_transaction_relationships_dict = book_transaction_relationships_instance.to_dict()
# create an instance of BookTransactionRelationships from a dict
book_transaction_relationships_from_dict = BookTransactionRelationships.from_dict(book_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


