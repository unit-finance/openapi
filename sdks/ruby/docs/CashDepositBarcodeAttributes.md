# UnitFinanceSdk::CashDepositBarcodeAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **barcode_number** | **String** | Unique identifier of the barcode. This field will be used in Get Barcode Image by Barcode Number endpoint. |  |
| **expiration** | **Time** | The expiration date and time of the barcode. |  |
| **store_id** | **String** | Identifier of the retail store that supports Cash Deposits. This field is obtained from either List by coordinates or List by postal code endpoints. |  |
| **retailer_name** | **String** | Name of the retailer store that supports Cash Deposits. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CashDepositBarcodeAttributes.new(
  barcode_number: null,
  expiration: null,
  store_id: null,
  retailer_name: null
)
```

