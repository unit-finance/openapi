# UnitFinanceSdk::ListCardFraudCases200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;ListCardFraudCases200ResponseDataInner&gt;**](ListCardFraudCases200ResponseDataInner.md) | Array of card fraud case resources. Each resource can be either Transaction or Authorization, as indicated by the type field. |  |
| **meta** | [**Meta**](Meta.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ListCardFraudCases200Response.new(
  data: null,
  meta: null
)
```

