# ListTaxForms200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[TaxForm]**](TaxForm.md) |  | 

## Example

```python
from unit_finance_sdk.models.list_tax_forms200_response import ListTaxForms200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListTaxForms200Response from a JSON string
list_tax_forms200_response_instance = ListTaxForms200Response.from_json(json)
# print the JSON string representation of the object
print(ListTaxForms200Response.to_json())

# convert the object into a dict
list_tax_forms200_response_dict = list_tax_forms200_response_instance.to_dict()
# create an instance of ListTaxForms200Response from a dict
list_tax_forms200_response_from_dict = ListTaxForms200Response.from_dict(list_tax_forms200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


