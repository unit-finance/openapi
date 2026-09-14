# CreateCheckDepositSendLinkDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**white_label_theme** | [**Relationship**](Relationship.md) |  | 
**account** | [**Relationship**](Relationship.md) |  | 
**authorized_user** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_deposit_send_link_data_relationships import CreateCheckDepositSendLinkDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckDepositSendLinkDataRelationships from a JSON string
create_check_deposit_send_link_data_relationships_instance = CreateCheckDepositSendLinkDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateCheckDepositSendLinkDataRelationships.to_json())

# convert the object into a dict
create_check_deposit_send_link_data_relationships_dict = create_check_deposit_send_link_data_relationships_instance.to_dict()
# create an instance of CreateCheckDepositSendLinkDataRelationships from a dict
create_check_deposit_send_link_data_relationships_from_dict = CreateCheckDepositSendLinkDataRelationships.from_dict(create_check_deposit_send_link_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


