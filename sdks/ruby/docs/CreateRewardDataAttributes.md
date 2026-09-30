# UnitFinanceSdk::CreateRewardDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents) to reward the account. |  |
| **description** | **String** | Description of the reward (maximum of 50 characters). |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **idempotency_key** | **String** | Optional, but **strongly recommended**. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateRewardDataAttributes.new(
  amount: 3000,
  description: Reward for transaction #5678,
  tags: null,
  idempotency_key: null
)
```

