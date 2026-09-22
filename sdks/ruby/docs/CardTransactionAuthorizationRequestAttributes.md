# UnitFinanceSdk::CardTransactionAuthorizationRequestAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the authorization request was created. |  |
| **amount** | **Integer** | The amount (cents) of the authorization request. |  |
| **status** | **String** | The status of the authorization request. Either Pending, Approved or Declined. |  |
| **partial_approval_allowed** | **Boolean** | Indicates whether the authorization request supports partial amount approval. |  |
| **approved_amount** | **Integer** | The amount (cents) that was approved. Available only when status is Approved. | [optional] |
| **decline_reason** | **String** | The reason the authorization request was declined. One of AccountClosed, CardExceedsAmountLimit, DoNotHonor, InsufficientFunds, InvalidMerchant, ReferToCardIssuer, RestrictedCard, Timeout, TransactionNotPermittedToCardholder. Available only when status is Declined | [optional] |
| **merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  | [optional] |
| **recurring** | **Boolean** | Indicates whether the authorization is recurring |  |
| **payment_method** | **String** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] |
| **digital_wallet** | **String** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] |
| **card_verification_data** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] |
| **card_network** | **String** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional, See Tags. If specified when approving the authorization request. |  |
| **currency_conversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. | [optional] |
| **is_international** | **Boolean** | Indicates whether the transaction is international. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CardTransactionAuthorizationRequestAttributes.new(
  created_at: null,
  amount: null,
  status: null,
  partial_approval_allowed: null,
  approved_amount: null,
  decline_reason: null,
  merchant: null,
  recurring: null,
  payment_method: null,
  digital_wallet: null,
  card_verification_data: null,
  card_network: null,
  tags: null,
  currency_conversion: null,
  is_international: null
)
```

