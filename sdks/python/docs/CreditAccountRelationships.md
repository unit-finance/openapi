# CreditAccountRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.credit_account_relationships import CreditAccountRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreditAccountRelationships from a JSON string
credit_account_relationships_instance = CreditAccountRelationships.from_json(json)
# print the JSON string representation of the object
print(CreditAccountRelationships.to_json())

# convert the object into a dict
credit_account_relationships_dict = credit_account_relationships_instance.to_dict()
# create an instance of CreditAccountRelationships from a dict
credit_account_relationships_from_dict = CreditAccountRelationships.from_dict(credit_account_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


