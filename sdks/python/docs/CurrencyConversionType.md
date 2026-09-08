# CurrencyConversionType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_currency** | **str** | ISO 4217 currency code of original currency. | 
**amount_in_original_currency** | **float** | The amount in original currency in &#39;cents&#39; (i.e. 50 euros will be written 5000) | 
**fx_rate** | **str** | The conversion rate for the currency conversion to USD. | [optional] 

## Example

```python
from unit_finance_sdk.models.currency_conversion_type import CurrencyConversionType

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyConversionType from a JSON string
currency_conversion_type_instance = CurrencyConversionType.from_json(json)
# print the JSON string representation of the object
print(CurrencyConversionType.to_json())

# convert the object into a dict
currency_conversion_type_dict = currency_conversion_type_instance.to_dict()
# create an instance of CurrencyConversionType from a dict
currency_conversion_type_from_dict = CurrencyConversionType.from_dict(currency_conversion_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


