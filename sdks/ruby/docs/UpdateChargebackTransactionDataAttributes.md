# UnitFinanceSdk::UpdateChargebackTransactionDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **summary** | **String** | Summary of the transaction. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateChargebackTransactionDataAttributes.new(
  summary: Description: Funding,
  tags: {&quot;trackUserId&quot;:&quot;1234&quot;}
)
```

