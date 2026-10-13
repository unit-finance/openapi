# UnitFinanceSdk::RichMerchantDataType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Name of the merchant. |  |
| **website** | **String** | URL of the merchant&#39;s website. | [optional] |
| **logo** | **String** | URL of the merchant&#39;s logo. | [optional] |
| **phone** | **String** | Phone number of the merchant. | [optional] |
| **categories** | [**Array&lt;RichMerchantDataTypeCategoriesInner&gt;**](RichMerchantDataTypeCategoriesInner.md) | Array of categories the merchant belongs to (from the least specific to the most specific). | [optional] |
| **address** | [**RichMerchantDataTypeAddress**](RichMerchantDataTypeAddress.md) |  | [optional] |
| **coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the merchant. | [optional] |
| **facilitators** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | The transaction facilitators. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::RichMerchantDataType.new(
  name: null,
  website: null,
  logo: null,
  phone: null,
  categories: null,
  address: null,
  coordinates: null,
  facilitators: null
)
```

