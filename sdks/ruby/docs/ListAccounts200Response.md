# UnitFinanceSdk::ListAccounts200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;ListAccounts200ResponseDataInner&gt;**](ListAccounts200ResponseDataInner.md) |  |  |
| **included** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Array of resources requested by the include query parameter. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ListAccounts200Response.new(
  data: null,
  included: null
)
```

