# TaxFormAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_type** | **str** | the type of the tax form. | 
**tax_year** | **str** | The tax year of the form, formatted YYYY, e.g \&quot;2020\&quot;. | 

## Example

```python
from unit_finance_sdk.models.tax_form_attributes import TaxFormAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of TaxFormAttributes from a JSON string
tax_form_attributes_instance = TaxFormAttributes.from_json(json)
# print the JSON string representation of the object
print(TaxFormAttributes.to_json())

# convert the object into a dict
tax_form_attributes_dict = tax_form_attributes_instance.to_dict()
# create an instance of TaxFormAttributes from a dict
tax_form_attributes_from_dict = TaxFormAttributes.from_dict(tax_form_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


