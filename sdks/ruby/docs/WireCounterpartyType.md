# UnitFinanceSdk::WireCounterpartyType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **routing_number** | **String** | Valid 9-digit ABA routing transit number. |  |
| **account_number** | **String** | Bank account number. |  |
| **name** | **String** | Name of the person or company that owns the bank account. |  |
| **address** | [**AddressType**](AddressType.md) | Address of the counterparty account owner. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::WireCounterpartyType.new(
  routing_number: null,
  account_number: null,
  name: null,
  address: null
)
```

