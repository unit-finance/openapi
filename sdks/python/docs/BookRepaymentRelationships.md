# BookRepaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**credit_account** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] 
**payment** | [**Relationship**](Relationship.md) |  | [optional] 
**recurring_repayment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.book_repayment_relationships import BookRepaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BookRepaymentRelationships from a JSON string
book_repayment_relationships_instance = BookRepaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(BookRepaymentRelationships.to_json())

# convert the object into a dict
book_repayment_relationships_dict = book_repayment_relationships_instance.to_dict()
# create an instance of BookRepaymentRelationships from a dict
book_repayment_relationships_from_dict = BookRepaymentRelationships.from_dict(book_repayment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


