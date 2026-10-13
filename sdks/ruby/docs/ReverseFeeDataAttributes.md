# UnitFinanceSdk::ReverseFeeDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **description** | **String** | Description of the fee (maximum of 50 characters). |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |
| **idempotency_key** | **String** | Optional, but **strongly recommended**. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ReverseFeeDataAttributes.new(
  description: Monthly Subscription - reverse,
  tags: null,
  idempotency_key: null
)
```

