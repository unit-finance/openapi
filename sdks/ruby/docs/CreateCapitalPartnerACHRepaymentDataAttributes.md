# UnitFinanceSdk::CreateCapitalPartnerACHRepaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. |  |
| **amount** | **Integer** | The amount to repay. |  |
| **addenda** | **String** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **same_day** | **Boolean** | Optional, default is false. See Same Day ACH. | [optional] |
| **sec_code** | **String** | See Use a custom SEC Code. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCapitalPartnerACHRepaymentDataAttributes.new(
  description: test,
  amount: 200,
  addenda: null,
  tags: null,
  same_day: null,
  sec_code: null,
  idempotency_key: null
)
```

