# UnitFinanceSdk::UpdateACHPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. |  |
| **clearing_days_override** | **Integer** | Only supports ACH Payments with direction Debit in status PendingReview or Pending. See Dynamic Clearing Period. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateACHPaymentDataAttributes.new(
  tags: {&quot;by&quot;:null,&quot;uuid&quot;:&quot;83033b64-38f8-4dbc-91a1-313ff0156d02&quot;},
  clearing_days_override: 3
)
```

