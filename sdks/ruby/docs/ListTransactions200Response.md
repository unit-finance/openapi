# UnitFinanceSdk::ListTransactions200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;Transaction&gt;**](Transaction.md) | Array of transaction resources. |  |
| **included** | [**Array&lt;ListTransactions200ResponseIncludedInner&gt;**](ListTransactions200ResponseIncludedInner.md) | Array of resources requested by the include query parameter. | [optional] |
| **meta** | [**Meta**](Meta.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ListTransactions200Response.new(
  data: null,
  included: null,
  meta: null
)
```

