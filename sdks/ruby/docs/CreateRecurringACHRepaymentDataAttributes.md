# UnitFinanceSdk::CreateRecurringACHRepaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **description** | **String** | Repayment description (maximum of 50 characters). This will show up on the statement of the counterparty. |  |
| **addenda** | **String** | Optional, additional repayment description (maximum of 80 characters), not all institutions present that in payment description. | [optional] |
| **same_day** | **Boolean** | Optional, default is false. See Same Day ACH. | [optional] |
| **sec_code** | **String** | See Use a custom SEC Code. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this recurring repayment creates (see Tag Inheritance). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateRecurringACHRepaymentDataAttributes.new(
  description: ACH Repayments,
  addenda: null,
  same_day: null,
  sec_code: null,
  idempotency_key: adjaw1sqvies-7aepu852-h4d6sxh-8jkyhfa,
  tags: null
)
```

