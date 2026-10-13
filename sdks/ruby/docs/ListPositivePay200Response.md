# UnitFinanceSdk::ListPositivePay200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;ListPositivePay200ResponseDataInner&gt;**](ListPositivePay200ResponseDataInner.md) | Array of positive pay rule resources. Each resource can be any of the listed rule types, as indicated by the type field. |  |
| **meta** | [**Meta**](Meta.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ListPositivePay200Response.new(
  data: null,
  meta: null
)
```

