# UnitFinanceSdk::CreateBatchReleasesDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents) to move from the batch account to the receiver account. |  |
| **description** | **String** | Description of the payment (maximum of 50 characters). |  |
| **sender_name** | **String** | Sender name for the payment (maximum of 255 characters). |  |
| **sender_address** | [**AddressType**](AddressType.md) | Sender address for the payment. |  |
| **sender_account_number** | **String** | A unique identifier for the sender of the payment (maximum of 17 characters). As an example, when the payment comes from a card processor, this identifier may be set to the BIN followed by the last four digits of the card used. |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags will be passed to the related Release Transaction. | [optional] |
| **idempotency_key** | **String** | Optional, but strongly recommended. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateBatchReleasesDataAttributes.new(
  amount: null,
  description: null,
  sender_name: null,
  sender_address: null,
  sender_account_number: null,
  tags: null,
  idempotency_key: null
)
```

