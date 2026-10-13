# UnitFinanceSdk::StoreLocationAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **store_id** | **String** | Identifier of the retail store that supports Cash Deposits. This field will be used as storeId when Creating a Cash Deposit Barcode. |  |
| **retailer_name** | **String** | Name of the retail store that supports Cash Deposits. |  |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the retail store. |  |
| **address** | [**AddressType**](AddressType.md) | Address of the retail store. |  |
| **coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the retail store. |  |
| **distance** | **Float** | Distance to the retail store (in miles). |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::StoreLocationAttributes.new(
  store_id: null,
  retailer_name: null,
  phone: null,
  address: null,
  coordinates: null,
  distance: null
)
```

