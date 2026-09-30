# UnitFinanceSdk::RewardAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the reward was created. |  |
| **amount** | **Integer** | The amount (in cents) of the reward. |  |
| **description** | **String** | Description of the reward. |  |
| **status** | **String** | Either Sent or Rejected (see rejectReason for details). |  |
| **reject_reason** | **String** | More information about the status. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RewardAttributes.new(
  created_at: null,
  amount: null,
  description: null,
  status: null,
  reject_reason: null,
  tags: null
)
```

