# UnitFinanceSdk::AuthorizationRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **card** | [**Relationship**](Relationship.md) |  | [optional] |
| **customers** | [**Relationship**](Relationship.md) |  | [optional] |
| **authorization_request** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::AuthorizationRelationships.new(
  account: null,
  customer: null,
  card: null,
  customers: null,
  authorization_request: null
)
```

