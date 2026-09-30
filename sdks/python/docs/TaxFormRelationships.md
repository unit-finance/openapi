# TaxFormRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**accounts** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.tax_form_relationships import TaxFormRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of TaxFormRelationships from a JSON string
tax_form_relationships_instance = TaxFormRelationships.from_json(json)
# print the JSON string representation of the object
print(TaxFormRelationships.to_json())

# convert the object into a dict
tax_form_relationships_dict = tax_form_relationships_instance.to_dict()
# create an instance of TaxFormRelationships from a dict
tax_form_relationships_from_dict = TaxFormRelationships.from_dict(tax_form_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


