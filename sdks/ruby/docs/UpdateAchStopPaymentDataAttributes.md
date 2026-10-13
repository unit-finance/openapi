# UnitFinanceSdk::UpdateAchStopPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. | [optional] |
| **expiration** | **Date** | Date only (e.g. \&quot;2026-08-15\&quot;). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateAchStopPaymentDataAttributes.new(
  tags: {&quot;newTag&quot;:&quot;New tag value&quot;},
  expiration: Mon May 05 00:00:00 UTC 2025
)
```

