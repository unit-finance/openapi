# UnitFinanceSdk::ATMLocationAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **network** | **String** | Name of the ATM network. |  |
| **location_name** | **String** | Name of the ATM&#39;s location. |  |
| **coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the ATM. |  |
| **address** | [**AddressType**](AddressType.md) | Address of the ATM. |  |
| **distance** | **Float** | Distance to the ATM (in miles). |  |
| **surcharge_free** | **Boolean** | Indicates if the ATM is surcharge free. |  |
| **accept_deposits** | **Boolean** | Indicates if the ATM accepts deposits. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ATMLocationAttributes.new(
  network: null,
  location_name: null,
  coordinates: null,
  address: null,
  distance: null,
  surcharge_free: null,
  accept_deposits: null
)
```

