# CreateRecurringBookRepaymentDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | 
**credit_account** | [**Relationship**](Relationship.md) |  | 
**counterparty_account** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_book_repayment_data_relationships import CreateRecurringBookRepaymentDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringBookRepaymentDataRelationships from a JSON string
create_recurring_book_repayment_data_relationships_instance = CreateRecurringBookRepaymentDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringBookRepaymentDataRelationships.to_json())

# convert the object into a dict
create_recurring_book_repayment_data_relationships_dict = create_recurring_book_repayment_data_relationships_instance.to_dict()
# create an instance of CreateRecurringBookRepaymentDataRelationships from a dict
create_recurring_book_repayment_data_relationships_from_dict = CreateRecurringBookRepaymentDataRelationships.from_dict(create_recurring_book_repayment_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


