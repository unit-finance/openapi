# RecurringCreditACHPaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_credit_ach_payment_relationships import RecurringCreditACHPaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCreditACHPaymentRelationships from a JSON string
recurring_credit_ach_payment_relationships_instance = RecurringCreditACHPaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(RecurringCreditACHPaymentRelationships.to_json())

# convert the object into a dict
recurring_credit_ach_payment_relationships_dict = recurring_credit_ach_payment_relationships_instance.to_dict()
# create an instance of RecurringCreditACHPaymentRelationships from a dict
recurring_credit_ach_payment_relationships_from_dict = RecurringCreditACHPaymentRelationships.from_dict(recurring_credit_ach_payment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


