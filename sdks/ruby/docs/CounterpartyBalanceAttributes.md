# UnitFinanceSdk::CounterpartyBalanceAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **balance** | **Float** | The current balance amount (in cents) of the counterparty. |  |
| **available** | **Float** | The available balance amount (in cents) of the counterparty. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CounterpartyBalanceAttributes.new(
  balance: null,
  available: null
)
```

