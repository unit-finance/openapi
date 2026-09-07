# GenerateBarcodeData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**GenerateBarcodeDataAttributes**](GenerateBarcodeDataAttributes.md) |  | 
**relationships** | [**GenerateBarcodeDataRelationships**](GenerateBarcodeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.generate_barcode_data import GenerateBarcodeData

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateBarcodeData from a JSON string
generate_barcode_data_instance = GenerateBarcodeData.from_json(json)
# print the JSON string representation of the object
print(GenerateBarcodeData.to_json())

# convert the object into a dict
generate_barcode_data_dict = generate_barcode_data_instance.to_dict()
# create an instance of GenerateBarcodeData from a dict
generate_barcode_data_from_dict = GenerateBarcodeData.from_dict(generate_barcode_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


