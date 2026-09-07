# ACHReceivedPaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**receive_payment_transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**payment_advance_transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**repay_payment_advance_transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**stop_payment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_received_payment_relationships import ACHReceivedPaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ACHReceivedPaymentRelationships from a JSON string
ach_received_payment_relationships_instance = ACHReceivedPaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(ACHReceivedPaymentRelationships.to_json())

# convert the object into a dict
ach_received_payment_relationships_dict = ach_received_payment_relationships_instance.to_dict()
# create an instance of ACHReceivedPaymentRelationships from a dict
ach_received_payment_relationships_from_dict = ACHReceivedPaymentRelationships.from_dict(ach_received_payment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


