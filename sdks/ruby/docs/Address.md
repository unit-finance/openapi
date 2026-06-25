# UnitFinanceSdk::Address

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **street** | **String** | First line of an address. |  |
| **street2** | **String** | Optional. Second line of an address. | [optional] |
| **city** | **String** | City. |  |
| **state** | **String** | State. For US and CA addresses, two letters representing the state (US) or province (CA). |  |
| **postal_code** | **String** | Postal code. |  |
| **country** | **String** | Two letters representing the country. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::Address.new(
  street: null,
  street2: null,
  city: null,
  state: null,
  postal_code: null,
  country: null
)
```

