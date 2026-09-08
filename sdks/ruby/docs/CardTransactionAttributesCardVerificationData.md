# UnitFinanceSdk::CardTransactionAttributesCardVerificationData

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **verification_method** | **String** | The verification method used, one of: Address, CVV2, AddressAndCVV2. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CardTransactionAttributesCardVerificationData.new(
  verification_method: null
)
```

