# CreateExistingCreditApplicationDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**Relationship**](Relationship.md) |  | 
**lending_program** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_existing_credit_application_data_relationships import CreateExistingCreditApplicationDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExistingCreditApplicationDataRelationships from a JSON string
create_existing_credit_application_data_relationships_instance = CreateExistingCreditApplicationDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateExistingCreditApplicationDataRelationships.to_json())

# convert the object into a dict
create_existing_credit_application_data_relationships_dict = create_existing_credit_application_data_relationships_instance.to_dict()
# create an instance of CreateExistingCreditApplicationDataRelationships from a dict
create_existing_credit_application_data_relationships_from_dict = CreateExistingCreditApplicationDataRelationships.from_dict(create_existing_credit_application_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


