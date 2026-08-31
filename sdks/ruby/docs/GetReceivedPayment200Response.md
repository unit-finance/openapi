# UnitFinanceSdk::GetReceivedPayment200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**ACHReceivedPayment**](ACHReceivedPayment.md) |  |  |
| **included** | [**Array&lt;DepositAccount&gt;**](DepositAccount.md) | Array of resources requested by the include query parameter. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::GetReceivedPayment200Response.new(
  data: null,
  included: null
)
```

