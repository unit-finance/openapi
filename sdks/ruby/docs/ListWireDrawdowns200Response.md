# UnitFinanceSdk::ListWireDrawdowns200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;WireDrawdown&gt;**](WireDrawdown.md) |  |  |
| **included** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Array of resources requested by the include query parameter. | [optional] |
| **meta** | [**Meta**](Meta.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ListWireDrawdowns200Response.new(
  data: null,
  included: null,
  meta: null
)
```

