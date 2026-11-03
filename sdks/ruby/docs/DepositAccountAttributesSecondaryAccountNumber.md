# UnitFinanceSdk::DepositAccountAttributesSecondaryAccountNumber

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **routing_number** | **String** | Secondary routing number (9 digits). | [optional] |
| **account_number** | **String** | Secondary account number (10-12 digits). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::DepositAccountAttributesSecondaryAccountNumber.new(
  routing_number: null,
  account_number: null
)
```

