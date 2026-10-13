# UnitFinanceSdk::CreateWireDrawdownPositivePayDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **expiration_date** | **Date** | When the authorization expires. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Internal labels for your own use. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateWireDrawdownPositivePayDataAttributes.new(
  expiration_date: Thu Dec 31 00:00:00 UTC 2026,
  tags: {&quot;purpose&quot;:&quot;vendor-payment&quot;}
)
```

