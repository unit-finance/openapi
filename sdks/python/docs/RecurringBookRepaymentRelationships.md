# RecurringBookRepaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**credit_account** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_book_repayment_relationships import RecurringBookRepaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringBookRepaymentRelationships from a JSON string
recurring_book_repayment_relationships_instance = RecurringBookRepaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(RecurringBookRepaymentRelationships.to_json())

# convert the object into a dict
recurring_book_repayment_relationships_dict = recurring_book_repayment_relationships_instance.to_dict()
# create an instance of RecurringBookRepaymentRelationships from a dict
recurring_book_repayment_relationships_from_dict = RecurringBookRepaymentRelationships.from_dict(recurring_book_repayment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


