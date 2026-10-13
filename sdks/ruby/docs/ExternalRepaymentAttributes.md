# UnitFinanceSdk::ExternalRepaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **amount** | **Integer** | The amount (cents) of the repayment. |  |
| **status** | **String** | The status of the external repayment. One of Sent or Returned. |  |
| **description** | **String** | Repayment description. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ExternalRepaymentAttributes.new(
  created_at: null,
  updated_at: null,
  amount: null,
  status: null,
  description: null,
  tags: null
)
```

