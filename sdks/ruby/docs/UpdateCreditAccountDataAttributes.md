# UnitFinanceSdk::UpdateCreditAccountDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Updating Tags. | [optional] |
| **credit_limit** | **Integer** | Optional. The credit limit of the account (in cents). | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateCreditAccountDataAttributes.new(
  tags: null,
  credit_limit: null
)
```

