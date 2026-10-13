# UnitFinanceSdk::IndividualApplicationRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **documents** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] |
| **application_form** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::IndividualApplicationRelationships.new(
  org: null,
  customer: null,
  documents: null,
  application_form: null
)
```

