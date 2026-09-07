# RecurringCreditBookPaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_credit_book_payment_relationships import RecurringCreditBookPaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCreditBookPaymentRelationships from a JSON string
recurring_credit_book_payment_relationships_instance = RecurringCreditBookPaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(RecurringCreditBookPaymentRelationships.to_json())

# convert the object into a dict
recurring_credit_book_payment_relationships_dict = recurring_credit_book_payment_relationships_instance.to_dict()
# create an instance of RecurringCreditBookPaymentRelationships from a dict
recurring_credit_book_payment_relationships_from_dict = RecurringCreditBookPaymentRelationships.from_dict(recurring_credit_book_payment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


