# UnitFinanceSdk::WireDrawdownAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **amount** | **Integer** | The amount (cents) of the wire drawdown. |  |
| **description** | **String** | Wire drawdown description. |  |
| **counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The beneficiary party on the other end of the wire drawdown. |  |
| **direction** | **String** | The direction of the wire drawdown, either Incoming or Outgoing. |  |
| **imad** | **String** | Input Message Accountability Data. It&#39;s a unique number given to each wire drawdown. | [optional] |
| **omad** | **String** | Output Message Accountability Data. It&#39;s a unique number given to each wire drawdown. | [optional] |
| **sender_reference** | **String** | Sender reference. | [optional] |
| **reference_for_beneficiary** | **String** | Reference for the Beneficiary. | [optional] |
| **beneficiary_information** | **String** | Beneficiary Information, multi-line string delimited by \\n. | [optional] |
| **beneficiary_advice_information** | **String** | Beneficiary Advice Information, multi-line string delimited by \\n. | [optional] |
| **originator_to_beneficiary_information** | **String** | Originator To Beneficiary Information, multi-line string delimited by \\n. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::WireDrawdownAttributes.new(
  created_at: null,
  amount: null,
  description: null,
  counterparty: null,
  direction: null,
  imad: null,
  omad: null,
  sender_reference: null,
  reference_for_beneficiary: null,
  beneficiary_information: null,
  beneficiary_advice_information: null,
  originator_to_beneficiary_information: null
)
```

