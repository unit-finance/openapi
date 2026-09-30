# TaxForm

`taxForm` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**TaxFormAttributes**](TaxFormAttributes.md) |  | 
**relationships** | [**TaxFormRelationships**](TaxFormRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.tax_form import TaxForm

# TODO update the JSON string below
json = "{}"
# create an instance of TaxForm from a JSON string
tax_form_instance = TaxForm.from_json(json)
# print the JSON string representation of the object
print(TaxForm.to_json())

# convert the object into a dict
tax_form_dict = tax_form_instance.to_dict()
# create an instance of TaxForm from a dict
tax_form_from_dict = TaxForm.from_dict(tax_form_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


