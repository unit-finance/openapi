# UnitFinanceSdk::CheckCounterpartyType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **routing_number** | **String** | Valid 9-digit ABA routing transit number. |  |
| **account_number** | **String** | Bank account number. |  |
| **name** | **String** | Name of the person or company that owns the bank account. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CheckCounterpartyType.new(
  routing_number: null,
  account_number: null,
  name: null
)
```

