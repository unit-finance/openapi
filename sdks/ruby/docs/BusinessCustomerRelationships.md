# UnitFinanceSdk::BusinessCustomerRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |
| **application** | [**Relationship**](Relationship.md) |  | [optional] |
| **authorized_user_resources** | [**Relationship**](Relationship.md) |  | [optional] |
| **officer** | [**Relationship**](Relationship.md) |  | [optional] |
| **beneficial_owners** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BusinessCustomerRelationships.new(
  org: null,
  application: null,
  authorized_user_resources: null,
  officer: null,
  beneficial_owners: null
)
```

