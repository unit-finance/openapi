# UnitFinanceSdk::AuthorizationAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the authorization was created. |  |
| **amount** | **Integer** | The amount (cents) of the authorization. |  |
| **card_last4_digits** | **String** | The last 4 digits of the debit card involved in the authorization. |  |
| **status** | **String** | One of Authorized, Completed, Canceled, Declined, see Authorization Statuses. |  |
| **card_decision_source** | **String** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. | [optional] |
| **decline_reason** | **String** | The reason the authorization was declined. Available only when status is Declined | [optional] |
| **decline_description** | **String** | A human-readable description providing additional detail about the decline. Only present on some declined authorizations. | [optional] |
| **declined_by** | **String** | The entity that declined the authorization. One of Visa, Org, or Unit. Available only when status is Declined. | [optional] |
| **merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  | [optional] |
| **recurring** | **Boolean** | Indicates whether the authorization is recurring |  |
| **payment_method** | **String** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] |
| **digital_wallet** | **String** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] |
| **card_verification_data** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] |
| **card_network** | **String** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Inherited from the authorization request tags (see Tag Inheritance). |  |
| **cash_withdrawal_amount** | **Integer** | Cash withdrawal amount | [optional] |
| **summary** | **String** | Summary of the authorization. | [optional] |
| **rich_merchant_data** | [**RichMerchantDataType**](RichMerchantDataType.md) | Full merchant information. | [optional] |
| **currency_conversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::AuthorizationAttributes.new(
  created_at: null,
  amount: null,
  card_last4_digits: null,
  status: null,
  card_decision_source: null,
  decline_reason: null,
  decline_description: null,
  declined_by: null,
  merchant: null,
  recurring: null,
  payment_method: null,
  digital_wallet: null,
  card_verification_data: null,
  card_network: null,
  tags: null,
  cash_withdrawal_amount: null,
  summary: null,
  rich_merchant_data: null,
  currency_conversion: null
)
```

