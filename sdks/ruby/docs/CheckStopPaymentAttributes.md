# UnitFinanceSdk::CheckStopPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **amount** | **Integer** | The amount (cents) of the check payment. | [optional] |
| **status** | **String** | The status of the stop payment, one of Active or Disabled. |  |
| **check_number** | **String** | The checkNumber of the check payments that the stop payment operation will be applied to. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CheckStopPaymentAttributes.new(
  created_at: null,
  updated_at: null,
  amount: null,
  status: null,
  check_number: null,
  tags: null
)
```

