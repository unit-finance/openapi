# UnitFinanceSdk::PhoneType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **country_code** | **String** | Country code of the phone number, e.g. \&quot;1\&quot; for US. |  |
| **number** | **String** | The phone number without the country code, e.g. \&quot;4151193497\&quot;. For US phone numbers, 10 digits are required. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::PhoneType.new(
  country_code: null,
  number: null
)
```

