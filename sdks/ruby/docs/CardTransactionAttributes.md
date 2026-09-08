# UnitFinanceSdk::CardTransactionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the transaction was created. Common to all transaction types. |  |
| **direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
| **amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
| **balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
| **summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
| **card_last4_digits** | **String** | The last 4 digits of the debit card involved in the transaction. |  |
| **recurring** | **Boolean** | Indicates whether the transaction is recurring. | [optional] |
| **interchange** | **String** | The interchange share for this transaction. Calculated at the end of each day, see the transaction.updated event. | [optional] |
| **gross_interchange** | **String** | The gross interchange share for this transaction. | [optional] |
| **payment_method** | **String** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] |
| **digital_wallet** | **String** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] |
| **card_network** | **String** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] |
| **rich_merchant_data** | [**RichMerchantDataType**](RichMerchantDataType.md) | Full merchant information. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |
| **currency_conversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. | [optional] |
| **card_decision_source** | **String** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. | [optional] |
| **merchant** | [**CardTransactionAttributesMerchant**](CardTransactionAttributesMerchant.md) |  | [optional] |
| **card_verification_data** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CardTransactionAttributes.new(
  created_at: null,
  direction: null,
  amount: null,
  balance: null,
  summary: null,
  card_last4_digits: null,
  recurring: null,
  interchange: null,
  gross_interchange: null,
  payment_method: null,
  digital_wallet: null,
  card_network: null,
  rich_merchant_data: null,
  tags: null,
  currency_conversion: null,
  card_decision_source: null,
  merchant: null,
  card_verification_data: null
)
```

