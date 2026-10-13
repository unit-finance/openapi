# UnitFinanceSdk::GenerateBarcodeDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **store_id** | **String** | The unique storeId identifier of a store, obtained from either List by coordinates or List by postal code endpoints. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::GenerateBarcodeDataAttributes.new(
  store_id: 2438
)
```

