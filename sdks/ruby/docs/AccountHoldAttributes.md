# UnitFinanceSdk::AccountHoldAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | Status of the account hold: Active, PartiallyReleased or Released. |  |
| **amount** | **Integer** | The original amount (cents) of the account hold. |  |
| **remaining_hold_amount** | **Integer** | Optional. The remaining amount (cents) still being held. Only present when status is PartiallyReleased. | [optional] |
| **released_at** | **Date** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). The date the account hold was fully released. Only present when status is Released. | [optional] |
| **expired_at** | **Date** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). The date the account hold will be automatically released at. | [optional] |
| **description** | **String** | Optional. Account hold description (maximum of 80 characters). | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::AccountHoldAttributes.new(
  created_at: null,
  status: null,
  amount: null,
  remaining_hold_amount: null,
  released_at: null,
  expired_at: null,
  description: null,
  tags: null
)
```

