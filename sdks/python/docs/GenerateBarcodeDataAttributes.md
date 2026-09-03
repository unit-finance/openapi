# GenerateBarcodeDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store_id** | **str** | The unique storeId identifier of a store, obtained from either List by coordinates or List by postal code endpoints. | 

## Example

```python
from unit_finance_sdk.models.generate_barcode_data_attributes import GenerateBarcodeDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateBarcodeDataAttributes from a JSON string
generate_barcode_data_attributes_instance = GenerateBarcodeDataAttributes.from_json(json)
# print the JSON string representation of the object
print(GenerateBarcodeDataAttributes.to_json())

# convert the object into a dict
generate_barcode_data_attributes_dict = generate_barcode_data_attributes_instance.to_dict()
# create an instance of GenerateBarcodeDataAttributes from a dict
generate_barcode_data_attributes_from_dict = GenerateBarcodeDataAttributes.from_dict(generate_barcode_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


