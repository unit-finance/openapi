# UnitFinanceSdk::CreateWalletDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **wallet_terms** | **String** | The name of the wallet terms. |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateWalletDataAttributes.new(
  wallet_terms: walletDefault,
  tags: null,
  idempotency_key: null
)
```

