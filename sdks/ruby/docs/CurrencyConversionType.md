# UnitFinanceSdk::CurrencyConversionType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **original_currency** | **String** | ISO 4217 currency code of original currency. |  |
| **amount_in_original_currency** | **Float** | The amount in original currency in &#39;cents&#39; (i.e. 50 euros will be written 5000) |  |
| **fx_rate** | **String** | The conversion rate for the currency conversion to USD. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CurrencyConversionType.new(
  original_currency: null,
  amount_in_original_currency: null,
  fx_rate: null
)
```

