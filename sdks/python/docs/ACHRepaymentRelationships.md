# ACHRepaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**credit_account** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty** | [**Relationship**](Relationship.md) |  | [optional] 
**payment** | [**Relationship**](Relationship.md) |  | [optional] 
**recurring_repayment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_repayment_relationships import ACHRepaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ACHRepaymentRelationships from a JSON string
ach_repayment_relationships_instance = ACHRepaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(ACHRepaymentRelationships.to_json())

# convert the object into a dict
ach_repayment_relationships_dict = ach_repayment_relationships_instance.to_dict()
# create an instance of ACHRepaymentRelationships from a dict
ach_repayment_relationships_from_dict = ACHRepaymentRelationships.from_dict(ach_repayment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


