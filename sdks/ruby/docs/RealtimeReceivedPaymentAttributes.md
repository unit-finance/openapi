# UnitFinanceSdk::RealtimeReceivedPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the received payment was created. Common to all receive payment types. |  |
| **status** | **String** | The status of the Received Payment. One of Pending, Completed, Returned, Rejected, or TimedOut. See Received Payment Statuses. |  |
| **amount** | **Integer** | The amount (cents) of the RTP received payment. |  |
| **description** | **String** | Payment description / remittance information. |  |
| **counterparty** | [**RealTimeCounterpartyType**](RealTimeCounterpartyType.md) | The party on the other end of the transaction. For RTP received payments, this is always the originator (in ISO20022 terminology this is referred to as the Debtor). |  |
| **return_reason** | **String** | Present when status is Returned. See RTP return reasons. | [optional] |
| **reject_reason** | **String** | Present when status is Rejected. See RTP reject reasons. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RealtimeReceivedPaymentAttributes.new(
  created_at: null,
  status: null,
  amount: null,
  description: null,
  counterparty: null,
  return_reason: null,
  reject_reason: null,
  tags: null
)
```

