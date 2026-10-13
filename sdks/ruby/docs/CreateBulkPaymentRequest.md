# UnitFinanceSdk::CreateBulkPaymentRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;CreateBulkPaymentRequestDataInner&gt;**](CreateBulkPaymentRequestDataInner.md) | Array of payment creation payloads. ACH, Book, and Wire types may be mixed in the same bulk. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateBulkPaymentRequest.new(
  data: null
)
```

