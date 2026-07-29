# AccountEndOfDayRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.account_end_of_day_relationships import AccountEndOfDayRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AccountEndOfDayRelationships from a JSON string
account_end_of_day_relationships_instance = AccountEndOfDayRelationships.from_json(json)
# print the JSON string representation of the object
print(AccountEndOfDayRelationships.to_json())

# convert the object into a dict
account_end_of_day_relationships_dict = account_end_of_day_relationships_instance.to_dict()
# create an instance of AccountEndOfDayRelationships from a dict
account_end_of_day_relationships_from_dict = AccountEndOfDayRelationships.from_dict(account_end_of_day_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


