# UnitFinanceSdk::ReturnCheckPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reason** | **String** | The reason for returning the Check Payment. See valid reasons under the **Valid via Return API?** column. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ReturnCheckPaymentDataAttributes.new(
  reason: StopPayment
)
```

