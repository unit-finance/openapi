# UnitFinanceSdk::CreateCreditAccountDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **credit_terms** | **String** | The credit terms that will be associated with the account. |  |
| **credit_limit** | **Integer** | The credit limit of the account (in cents). |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCreditAccountDataAttributes.new(
  credit_terms: credit_terms_1,
  credit_limit: 20000,
  tags: null,
  idempotency_key: null
)
```

