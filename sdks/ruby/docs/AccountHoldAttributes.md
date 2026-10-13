# UnitFinanceSdk::AccountHoldAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | Status of the account hold, either Active, Released, PartiallyReleased. |  |
| **amount** | **Integer** | The amount (cents) of the payment. |  |
| **remaining_hold_amount** | **Integer** | Optional. The remaining amount (cents) being held. Only present when status is PartiallyReleased. | [optional] |
| **expired_at** | **Date** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). the date the account hold will be automatically released at. | [optional] |
| **description** | **String** | Account hold description (maximum of 80 characters). |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::AccountHoldAttributes.new(
  created_at: null,
  status: null,
  amount: null,
  remaining_hold_amount: null,
  expired_at: null,
  description: null,
  tags: null
)
```

