# UnitFinanceSdk::CreateACHPaymentExistingCounterpartyDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents). |  |
| **direction** | **String** | The direction in which the funds flow. |  |
| **description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. |  |
| **addenda** | **String** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |
| **verify_counterparty_balance** | **Boolean** | Optional, default is false. Verify the counterparty balance, if balance verification fails the payment will be rejected with reason set to CounterpartyInsufficientFunds. | [optional] |
| **same_day** | **Boolean** | Optional, default is false. See Same Day ACH. | [optional] |
| **sec_code** | **String** | Optional. See Use a custom SEC Code. | [optional] |
| **clearing_days_override** | **Integer** | Optional. See Dynamic Clearing Period. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateACHPaymentExistingCounterpartyDataAttributes.new(
  amount: 10000,
  direction: Credit,
  description: Funding,
  addenda: null,
  idempotency_key: null,
  tags: null,
  verify_counterparty_balance: null,
  same_day: null,
  sec_code: null,
  clearing_days_override: null
)
```

