# CheckStopPaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**stopped_payments** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_stop_payment_relationships import CheckStopPaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CheckStopPaymentRelationships from a JSON string
check_stop_payment_relationships_instance = CheckStopPaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(CheckStopPaymentRelationships.to_json())

# convert the object into a dict
check_stop_payment_relationships_dict = check_stop_payment_relationships_instance.to_dict()
# create an instance of CheckStopPaymentRelationships from a dict
check_stop_payment_relationships_from_dict = CheckStopPaymentRelationships.from_dict(check_stop_payment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


