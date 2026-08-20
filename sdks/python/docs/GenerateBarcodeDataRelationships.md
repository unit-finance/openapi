# GenerateBarcodeDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**Relationship**](Relationship.md) |  | 
**account** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.generate_barcode_data_relationships import GenerateBarcodeDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateBarcodeDataRelationships from a JSON string
generate_barcode_data_relationships_instance = GenerateBarcodeDataRelationships.from_json(json)
# print the JSON string representation of the object
print(GenerateBarcodeDataRelationships.to_json())

# convert the object into a dict
generate_barcode_data_relationships_dict = generate_barcode_data_relationships_instance.to_dict()
# create an instance of GenerateBarcodeDataRelationships from a dict
generate_barcode_data_relationships_from_dict = GenerateBarcodeDataRelationships.from_dict(generate_barcode_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


