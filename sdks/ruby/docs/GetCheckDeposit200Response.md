# UnitFinanceSdk::GetCheckDeposit200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**CheckDeposit**](CheckDeposit.md) |  |  |
| **included** | [**Array&lt;DepositAccount&gt;**](DepositAccount.md) | Array of resources requested by the include query parameter. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::GetCheckDeposit200Response.new(
  data: null,
  included: null
)
```

