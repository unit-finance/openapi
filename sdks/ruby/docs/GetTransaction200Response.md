# UnitFinanceSdk::GetTransaction200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Transaction**](Transaction.md) |  |  |
| **included** | [**Array&lt;ListTransactions200ResponseIncludedInner&gt;**](ListTransactions200ResponseIncludedInner.md) | Array of resources requested by the include query parameter. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::GetTransaction200Response.new(
  data: null,
  included: null
)
```

