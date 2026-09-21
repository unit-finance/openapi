# CreatePolicyDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_outreach_settings** | [**Relationship**](Relationship.md) |  | 
**message_outreach_settings** | [**Relationship**](Relationship.md) |  | 
**white_label_theme** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_policy_data_relationships import CreatePolicyDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePolicyDataRelationships from a JSON string
create_policy_data_relationships_instance = CreatePolicyDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreatePolicyDataRelationships.to_json())

# convert the object into a dict
create_policy_data_relationships_dict = create_policy_data_relationships_instance.to_dict()
# create an instance of CreatePolicyDataRelationships from a dict
create_policy_data_relationships_from_dict = CreatePolicyDataRelationships.from_dict(create_policy_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


