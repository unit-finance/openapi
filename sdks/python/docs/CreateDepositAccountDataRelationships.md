# CreateDepositAccountDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_deposit_account_data_relationships import CreateDepositAccountDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDepositAccountDataRelationships from a JSON string
create_deposit_account_data_relationships_instance = CreateDepositAccountDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateDepositAccountDataRelationships.to_json())

# convert the object into a dict
create_deposit_account_data_relationships_dict = create_deposit_account_data_relationships_instance.to_dict()
# create an instance of CreateDepositAccountDataRelationships from a dict
create_deposit_account_data_relationships_from_dict = CreateDepositAccountDataRelationships.from_dict(create_deposit_account_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


