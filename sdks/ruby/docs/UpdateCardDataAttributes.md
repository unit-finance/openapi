# UnitFinanceSdk::UpdateCardDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **shipping_address** | [**AddressType**](AddressType.md) | Address to ship the card to. | [optional] |
| **address** | [**AddressType**](AddressType.md) | Address of the card holder. | [optional] |
| **email** | **String** | Email address of the card holder. | [optional] |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. | [optional] |
| **date_of_birth** | **Date** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateCardDataAttributes.new(
  shipping_address: null,
  address: null,
  email: richard@piedpiper.com,
  phone: null,
  date_of_birth: Fri Aug 10 00:00:00 UTC 2001
)
```

