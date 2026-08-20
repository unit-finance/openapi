# ACHPaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty** | [**Relationship**](Relationship.md) |  | [optional] 
**transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**recurring_payment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_payment_relationships import ACHPaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ACHPaymentRelationships from a JSON string
ach_payment_relationships_instance = ACHPaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(ACHPaymentRelationships.to_json())

# convert the object into a dict
ach_payment_relationships_dict = ach_payment_relationships_instance.to_dict()
# create an instance of ACHPaymentRelationships from a dict
ach_payment_relationships_from_dict = ACHPaymentRelationships.from_dict(ach_payment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


