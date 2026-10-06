# GetTaxFormById200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TaxForm**](TaxForm.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_tax_form_by_id200_response import GetTaxFormById200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTaxFormById200Response from a JSON string
get_tax_form_by_id200_response_instance = GetTaxFormById200Response.from_json(json)
# print the JSON string representation of the object
print(GetTaxFormById200Response.to_json())

# convert the object into a dict
get_tax_form_by_id200_response_dict = get_tax_form_by_id200_response_instance.to_dict()
# create an instance of GetTaxFormById200Response from a dict
get_tax_form_by_id200_response_from_dict = GetTaxFormById200Response.from_dict(get_tax_form_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


