# DepositAccountRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.deposit_account_relationships import DepositAccountRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of DepositAccountRelationships from a JSON string
deposit_account_relationships_instance = DepositAccountRelationships.from_json(json)
# print the JSON string representation of the object
print(DepositAccountRelationships.to_json())

# convert the object into a dict
deposit_account_relationships_dict = deposit_account_relationships_instance.to_dict()
# create an instance of DepositAccountRelationships from a dict
deposit_account_relationships_from_dict = DepositAccountRelationships.from_dict(deposit_account_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


