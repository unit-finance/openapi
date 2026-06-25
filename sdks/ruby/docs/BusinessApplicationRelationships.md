# UnitFinanceSdk::BusinessApplicationRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **officer** | [**Relationship**](Relationship.md) |  | [optional] |
| **beneficial_owners** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] |
| **documents** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] |
| **application_form** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BusinessApplicationRelationships.new(
  org: null,
  customer: null,
  officer: null,
  beneficial_owners: null,
  documents: null,
  application_form: null
)
```

