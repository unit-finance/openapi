# CreateRecurringACHRepaymentDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | 
**credit_account** | [**Relationship**](Relationship.md) |  | 
**counterparty** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_ach_repayment_data_relationships import CreateRecurringACHRepaymentDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringACHRepaymentDataRelationships from a JSON string
create_recurring_ach_repayment_data_relationships_instance = CreateRecurringACHRepaymentDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringACHRepaymentDataRelationships.to_json())

# convert the object into a dict
create_recurring_ach_repayment_data_relationships_dict = create_recurring_ach_repayment_data_relationships_instance.to_dict()
# create an instance of CreateRecurringACHRepaymentDataRelationships from a dict
create_recurring_ach_repayment_data_relationships_from_dict = CreateRecurringACHRepaymentDataRelationships.from_dict(create_recurring_ach_repayment_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


