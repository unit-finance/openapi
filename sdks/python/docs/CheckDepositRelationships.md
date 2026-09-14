# CheckDepositRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**transaction** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.check_deposit_relationships import CheckDepositRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDepositRelationships from a JSON string
check_deposit_relationships_instance = CheckDepositRelationships.from_json(json)
# print the JSON string representation of the object
print(CheckDepositRelationships.to_json())

# convert the object into a dict
check_deposit_relationships_dict = check_deposit_relationships_instance.to_dict()
# create an instance of CheckDepositRelationships from a dict
check_deposit_relationships_from_dict = CheckDepositRelationships.from_dict(check_deposit_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


