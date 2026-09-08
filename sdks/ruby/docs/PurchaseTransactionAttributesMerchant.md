# UnitFinanceSdk::PurchaseTransactionAttributesMerchant

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | The name of the merchant. |  |
| **type** | **Integer** | The 4-digit ISO 18245 merchant category code (MCC). |  |
| **category** | **String** | The merchant category, described by the MCC code (see this reference for the list of category descriptions). |  |
| **location** | **String** | The location (city, state, etc.) of the merchant. | [optional] |
| **id** | **String** | The unique network merchant identifier. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::PurchaseTransactionAttributesMerchant.new(
  name: null,
  type: null,
  category: null,
  location: null,
  id: null
)
```

