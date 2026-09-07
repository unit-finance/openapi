# UnitFinanceSdk::AccountEndOfDayAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date** | **Date** | The date the account end-of-day resource was created. |  |
| **balance** | **Integer** | The balance amount (in cents). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. |  |
| **hold** | **Integer** | The hold amount (in cents). Not available for spending. |  |
| **available** | **Integer** | The available balance for spending (in cents). |  |
| **overdraft_limit** | **Integer** | Optional. The overdraft limit amount. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::AccountEndOfDayAttributes.new(
  date: null,
  balance: null,
  hold: null,
  available: null,
  overdraft_limit: null
)
```

