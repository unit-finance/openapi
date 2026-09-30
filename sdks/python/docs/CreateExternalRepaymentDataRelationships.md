# CreateExternalRepaymentDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_account** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_external_repayment_data_relationships import CreateExternalRepaymentDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExternalRepaymentDataRelationships from a JSON string
create_external_repayment_data_relationships_instance = CreateExternalRepaymentDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateExternalRepaymentDataRelationships.to_json())

# convert the object into a dict
create_external_repayment_data_relationships_dict = create_external_repayment_data_relationships_instance.to_dict()
# create an instance of CreateExternalRepaymentDataRelationships from a dict
create_external_repayment_data_relationships_from_dict = CreateExternalRepaymentDataRelationships.from_dict(create_external_repayment_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


