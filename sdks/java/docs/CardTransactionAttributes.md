

# CardTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**cardLast4Digits** | **String** | The last 4 digits of the debit card involved in the transaction. |  |
|**recurring** | **Boolean** | Indicates whether the transaction is recurring. |  [optional] |
|**interchange** | **String** | The interchange share for this transaction. Calculated at the end of each day, see the transaction.updated event. |  [optional] |
|**grossInterchange** | **String** | The gross interchange share for this transaction. |  [optional] |
|**paymentMethod** | **String** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. |  [optional] |
|**digitalWallet** | **String** | The type of digital wallet used, one of: Google, Apple, Other. |  [optional] |
|**cardNetwork** | **String** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. |  [optional] |
|**richMerchantData** | [**RichMerchantDataType**](RichMerchantDataType.md) | Full merchant information. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |
|**currencyConversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. |  [optional] |
|**cardDecisionSource** | **String** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. |  [optional] |
|**merchant** | [**CardTransactionAttributesMerchant**](CardTransactionAttributesMerchant.md) |  |  [optional] |
|**cardVerificationData** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  |  [optional] |



