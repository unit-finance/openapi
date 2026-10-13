# UnitFinanceSdk::WireDrawdownPositivePayAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | One of AwaitingDocuments, Active, Expired, or Cancelled. |  |
| **expiration_date** | **Date** | When the authorization expires. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::WireDrawdownPositivePayAttributes.new(
  created_at: null,
  status: null,
  expiration_date: null,
  tags: null
)
```

