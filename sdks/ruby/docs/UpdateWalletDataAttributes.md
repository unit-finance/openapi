# UnitFinanceSdk::UpdateWalletDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Optional. The name of the wallet. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |
| **wallet_terms** | **String** | Optional. The name of the selected wallet terms. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateWalletDataAttributes.new(
  name: null,
  tags: null,
  wallet_terms: null
)
```

