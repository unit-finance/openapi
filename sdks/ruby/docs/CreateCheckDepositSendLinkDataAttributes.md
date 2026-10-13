# UnitFinanceSdk::CreateCheckDepositSendLinkDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **qr_code** | **Boolean** | If true, a QR code (base64 encoded PNG) will be included in the response. |  |
| **idempotency_key** | **String** | See Idempotency. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCheckDepositSendLinkDataAttributes.new(
  qr_code: true,
  idempotency_key: 3a1a33be-4e12-4603-9ed0-820922389fb8
)
```

