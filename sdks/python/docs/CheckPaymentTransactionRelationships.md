# CheckPaymentTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**check_payment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_payment_transaction_relationships import CheckPaymentTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPaymentTransactionRelationships from a JSON string
check_payment_transaction_relationships_instance = CheckPaymentTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(CheckPaymentTransactionRelationships.to_json())

# convert the object into a dict
check_payment_transaction_relationships_dict = check_payment_transaction_relationships_instance.to_dict()
# create an instance of CheckPaymentTransactionRelationships from a dict
check_payment_transaction_relationships_from_dict = CheckPaymentTransactionRelationships.from_dict(check_payment_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


