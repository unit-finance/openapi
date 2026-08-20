# UnitFinanceSdk::ListReceivedPayments200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;ACHReceivedPayment&gt;**](ACHReceivedPayment.md) |  |  |
| **included** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Array of resources requested by the include query parameter. | [optional] |
| **meta** | [**Meta**](Meta.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ListReceivedPayments200Response.new(
  data: null,
  included: null,
  meta: null
)
```

