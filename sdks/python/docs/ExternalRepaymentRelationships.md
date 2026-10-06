# ExternalRepaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_account** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.external_repayment_relationships import ExternalRepaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalRepaymentRelationships from a JSON string
external_repayment_relationships_instance = ExternalRepaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(ExternalRepaymentRelationships.to_json())

# convert the object into a dict
external_repayment_relationships_dict = external_repayment_relationships_instance.to_dict()
# create an instance of ExternalRepaymentRelationships from a dict
external_repayment_relationships_from_dict = ExternalRepaymentRelationships.from_dict(external_repayment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


