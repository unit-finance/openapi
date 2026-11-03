# UnitFinanceSdk::UpdateDepositAccountDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Updating Tags. | [optional] |
| **deposit_product** | **String** | Optional. Name of the selected deposit product (you can get the list of available deposit products using a dedicated API endpoint). | [optional] |
| **name** | **String** | Optional. Account display name. | [optional] |
| **overdraft_limit** | **Integer** | Optional. Overdraft limit in cents. Must be 0 or greater. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateDepositAccountDataAttributes.new(
  tags: null,
  deposit_product: null,
  name: null,
  overdraft_limit: null
)
```

