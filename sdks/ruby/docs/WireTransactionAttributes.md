# UnitFinanceSdk::WireTransactionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the transaction was created. Common to all transaction types. |  |
| **direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
| **amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
| **balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
| **summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
| **imad_omad** | **Hash&lt;String, Object&gt;** | (Conditional) IMAD/OMAD - Input/Output Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. |  |
| **counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction, either the beneficiary or the originator. |  |
| **description** | **String** | Description of the transaction as entered by the originator. | [optional] |
| **originator_to_beneficiary_information** | **String** | Originator To Beneficiary Information, multi-line string delimited by \\n. |  |
| **sender_reference** | **String** | Sender reference. |  |
| **reference_for_beneficiary** | **String** | Reference for the Beneficiary. |  |
| **beneficiary_information** | **String** | Beneficiary Information, multi-line string delimited by \\n. |  |
| **beneficiary_advice_information** | **String** | Beneficiary Advice Information, multi-line string delimited by \\n. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::WireTransactionAttributes.new(
  created_at: null,
  direction: null,
  amount: null,
  balance: null,
  summary: null,
  imad_omad: null,
  counterparty: null,
  description: null,
  originator_to_beneficiary_information: null,
  sender_reference: null,
  reference_for_beneficiary: null,
  beneficiary_information: null,
  beneficiary_advice_information: null,
  tags: null
)
```

